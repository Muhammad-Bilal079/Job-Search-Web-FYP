// validators/userValidator.js

import { body , validationResult } from 'express-validator';

const registerValidationRules = () => {
    return [
      body('fullName')
        .trim()
        .notEmpty()
        .withMessage('Full name is required.')
        .isLength({ min: 3, max: 50 })
        .withMessage('Full name must be between 3 and 50 characters.'),
  
      body('email')
        .notEmpty()
        .withMessage('Email is required.')
        .isEmail()
        .withMessage('Please provide a valid email address.'),
  
      body('password')
        .notEmpty()
        .withMessage('Password is required.')
        .isLength({ min: 8 })
        .withMessage('Password must be at least 8 characters long.'),
  
      body('phoneNumber')
        .optional()
        .isMobilePhone()
        .withMessage('Please provide a valid phone number.'),
  
      body('gender')
        .notEmpty()
        .withMessage('Gender is required.')
        .isIn(['male', 'female', 'other'])
        .withMessage('Gender must be male, female, or other.'),
  
      body('dateOfBirth')
        .optional()
        .isDate()
        .withMessage('Please provide a valid date of birth.')
        .custom((value) => {
          if (new Date(value) > new Date()) {
            throw new Error('Date of birth cannot be in the future.');
          }
          return true;
        }),
  
      body('currentJobTitle')
        .optional()
        .isLength({ max: 100 })
        .withMessage('Job title cannot exceed 100 characters.'),
  
      body('experienceLevel')
        .notEmpty()
        .withMessage('Experience level is required.')
        .isIn(['fresher', 'middle', 'senior'])
        .withMessage('Experience level must be fresher, middle, or senior.'),
  
      body('industry')
        .optional()
        .isLength({ max: 100 })
        .withMessage('Industry cannot exceed 100 characters.'),
  
      body('currentEmployer')
        .optional()
        .isLength({ max: 100 })
        .withMessage('Current employer cannot exceed 100 characters.'),
  
      body('highestQualification')
        .optional()
        .isLength({ max: 100 })
        .withMessage('Highest qualification cannot exceed 100 characters.'),
  
      body('universityName')
        .optional()
        .isLength({ max: 100 })
        .withMessage('University name cannot exceed 100 characters.'),
  
      body('yearOfPassing')
        .optional()
        .isInt({ min: 1900, max: new Date().getFullYear() })
        .withMessage(`Year of passing must be between 1900 and ${new Date().getFullYear()}.`),
  
      body('currentLocation')
        .notEmpty()
        .withMessage('Location is required.')
        .isLength({ max: 100 })
        .withMessage('Current location cannot exceed 100 characters.'),
  
      body('profilePicture')
        .optional()
        .isURL()
        .withMessage('Profile picture must be a valid URL.'),
  
      body('resume')
        .optional()
        .isURL()
        .withMessage('Resume must be a valid URL.'),
  
      body('professionalSummary')
        .optional()
        .isLength({ max: 500 })
        .withMessage('Professional summary cannot exceed 500 characters.'),
    ];
  };
  

export default registerValidationRules