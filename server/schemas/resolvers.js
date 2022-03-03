const { User, Date } = require('../models')
const { AuthenticationError, ApolloError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({ _id: context.user._id })
                    .select("-__v -password")
                return userData;
            }
            throw new AuthenticationError('Not logged in');
        },
        categorizedDates: async (parent, args) => {
            const catDates = await Date.find({ categories: args.category })
            return catDates;
        },
        dates: async (parent, args) => {
            return await Date.find({})
        },
        savedDates: async (parent, args, context) => {
            if (context.user) {
                const currentUser = await User.findById(context.user._id).populate("savedDates")
                    
                // TODO: in future change to use a mongoose populate method instead of mutating data
                return currentUser.savedDates.map(date => {
                    date.reviews = date.reviews.filter(review => review.username === context.user.username)
                    return date 
                })
            }
            throw new AuthenticationError('Incorrect credentials');
        }
    },

    //                                                                              <-----Mutations start here
    Mutation: {
        //Add a User
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);
            return { token, user };
        },

        //Login
        loginUser: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const token = signToken(user);
            return { token, user };
        },

        //Save a Date to a user
        saveDate: async (parent, { dateId }, context) => {
            if (context.user) {
                const updatedUser = await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $addToSet: { savedDates: dateId } },
                    { new: true, runValidators: true }
                );
                return updatedUser;
            }
            throw new AuthenticationError('You need to be logged in!');
        },

        //Delete a Date from a user
        removeDate: async (parent, { dateId }, context) => {
            if (context.user) {
                const updatedUser = await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $pull: { savedDates: dateId } },
                    { new: true, runValidators: true }
                );
                return updatedUser;
            }
            throw new AuthenticationError('You need to be logged in!');
        },

        //Add a review
        addReview: async (parent, { rating, dateId }, context) => {
            if (context.user) {
                const date = await Date.findById(dateId)
                const dateReviews = date.reviews
                let isRated = false
                dateReviews.forEach(review => {
                    if (review.username === context.user.username) {
                        isRated = true
                    }
                })
                if (!isRated) {
                    return await Date.findOneAndUpdate(
                    { _id: dateId },
                    { $addToSet: { reviews: { rating: rating, username: context.user.username } } },
                    { new: true, runValidators: true }
                )
                } else {
                    await Date.findOneAndUpdate(
                        { _id: dateId },
                        {$pull: { reviews: { username: context.user.username }}},
                        { new: true, runValidators: true }
                    )
                    return await Date.findOneAndUpdate(
                        { _id: dateId },
                        { $addToSet: { reviews: { rating: rating, username: context.user.username } } },
                        { new: true, runValidators: true }
                    )
                }
            }
        }
    }
}

module.exports = resolvers;