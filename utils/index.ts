import React, { Fragment } from "react";
import { Link } from "expo-router";

export const watchTimePassedOut = (createdAt: any) => {
  if (!createdAt) return "0 seconds ago";
  const postCreatedAt = new Date(createdAt);
  const now = new Date();
  const diff = now.getTime() - postCreatedAt.getTime();
  const diffInDays = Math.floor(diff / (1000 * 3600 * 24));
  const diffInHours = Math.floor(diff / (1000 * 3600));
  const diffInMinutes = Math.floor(diff / (1000 * 60));
  const diffInSeconds = Math.floor(diff / 1000);

  if (diffInDays > 0 && diffInDays < 7) {
    if (diffInDays > 0 && diffInDays < 2) return `${diffInDays} day ago`;

    return `${diffInDays} days ago`;
  }

  if (diffInHours > 0 && diffInHours < 24) {
    if (diffInHours > 0 && diffInHours < 2) return `${diffInHours} hour ago`;

    return `${diffInHours} hours ago`;
  }

  if (diffInMinutes > 0 && diffInMinutes < 60) {
    if (diffInMinutes > 0 && diffInMinutes < 2)
      return `${diffInMinutes} minute ago`;

    return `${diffInMinutes} minutes ago`;
  }

  if (diffInSeconds > 0 && diffInSeconds < 60) {
    if (diffInSeconds > 0 && diffInSeconds < 2)
      return `${diffInSeconds} second ago`;

    return `${diffInSeconds} seconds ago`;
  }

  if (diffInSeconds >= 0 && diffInSeconds <= 10) {
    return `Just now`;
  }

  // Get the user's locale
  const userLocale = navigator.language || navigator.language;

  // Use the user's locale to format the date
  const formattedDate = new Date(postCreatedAt).toLocaleDateString(userLocale, {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return formattedDate;
};
