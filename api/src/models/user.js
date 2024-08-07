import mongoose from "../config/db.js";
import validator from 'validator';

const userSchema = new mongoose.Schema({
    fullName: {
      type: String,
      required: [true, 'Full name is required'],
      trim: true,
      minlength: [3, 'Full name must be at least 3 characters long'],
      maxlength: [50, 'Full name cannot exceed 50 characters'],
    },
    email: {
      type: String,
      required: [true, 'Email address is required'],
      unique: true,
      lowercase: true,
      trim: true,
      validate: {
        validator: validator.isEmail,
        message: 'Please enter a valid email address',
      },
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
      minlength: [8, 'Password must be at least 8 characters long'],
    },
    phoneNumber: {
      type: String,
      required: false,
      trim: true,
      validate: {
        validator: validator.isMobilePhone,
        message: 'Please enter a valid phone number',
      },
    },
    gender: {
      type: String,
      required: [true, 'Gender is required'],
      enum: ['male', 'female', 'other'],
      default:'other',
    },
    dateOfBirth: {
      type: Date,
      required: false,
      validate: {
        validator: (value) => {
          return value <= new Date();
        },
        message: 'Date of birth cannot be in the future',
      },
    },
    currentJobTitle: {
      type: String,
      required: false,
      trim: true,
      maxlength: [100, 'Job title cannot exceed 100 characters'],
    },
    experienceLevel: {
      type: String,
      enum: ['fresher', 'middle', 'senior'],
      required: [true, 'Experience level is required'],
    },
    industry: {
      type: String,
      required: false,
      trim: true,
      maxlength: [100, 'Industry cannot exceed 100 characters'],
    },
    currentEmployer: {
      type: String,
      required: false,
      trim: true,
      maxlength: [100, 'Current employer cannot exceed 100 characters'],
    },
    highestQualification: {
      type: String,
      required: false,
      trim: true,
      maxlength: [100, 'Highest qualification cannot exceed 100 characters'],
    },
    universityName: {
      type: String,
      required: false,
      trim: true,
      maxlength: [100, 'University name cannot exceed 100 characters'],
    },
    yearOfPassing: {
      type: Number,
      required: false,
      min: [1900, 'Year of passing must be a valid year'],
      max: [new Date().getFullYear(), 'Year of passing cannot be in the future'],
    },
    currentLocation: {
      type: String,
      required: true,
      trim: true,
      maxlength: [100, 'Current location cannot exceed 100 characters'],
    },
    profilePicture: {
      type: String,
      required: false,
      validate: {
        validator: validator.isURL,
        message: 'Profile picture must be a valid URL',
      },
    },
    resume: {
      type: String,
      required: false,
      validate: {
        validator: validator.isURL,
        message: 'Resume must be a valid URL',
      },
    },
    professionalSummary: {
      type: String,
      required: false,
      trim: true,
      maxlength: [500, 'Professional summary cannot exceed 500 characters'],
    },
  }, { timestamps: true });
 

const User = mongoose .model('User',userSchema);

export default User