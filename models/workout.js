const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    date: {
        type: Date,
        default: Date.now
      },
    exercises: [
        {
        type: {
            type: String,
            trim: true,
            required: "Is this cardio or resistance training?"
        },
        },
        {
            name: {
                type: String,
                trim: true,
                required: "What is the name of your workout?"
            }
        },
        {
            weight: {
                type: Number,
                trim: true,
                required:"How much weight did you lift?"
            }
        },
        {
            sets: {
                type: Number,
                trim: true,
                required:"How many sets did you do?"
            }
        },
        {
            reps: {
                type: Number,
                trim: true,
                required:"How many reps did you do?"
            }
        },
        {
            distance: {
                type: Number,
                trim: true,
                required:"How far did you go?"
            }
        },
        {
            durataion: {
                type: Number,
                trim: true,
                required:"How long was this workout?"
            }
        },        
    ]
});


const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;