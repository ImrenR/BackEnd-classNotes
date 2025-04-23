"use strict";

const { mongoose } = require("../configs/dbConnection");
const passwordEncrypte = require("../helpers/passwordEncrypte");

const PersonnelSchema = new mongoose.Schema(
  {
    departmentId: {
      type: mongoose.Types.Schema.ObjectId,
      ref: "Department",
      required: true,
    },
    username: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
      set: (password) => passwordEncrypte(password),
    },
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    phone: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      minlength: 11,
      math: [/^\d{11}$/, "Phone nmuber is not valid"],
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      validate: [
        (email) => email.includes("@") && email.includes("."),
        "Email is not valid",
      ],
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    salary: {
      type: Number,
      default: 5000,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    isLead: {
      type: Boolean,
      default: false,
    },
    startedAt: {
      type: Date,
      default: Date.now(),
      required: true
    },
  },
  {
    collection: "personnel",
    timestamps: true,
  }
);

modules.exports = mongoose.model('Personnel', PersonnelSchema)
