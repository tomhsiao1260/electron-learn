import React from "react";

export const TextField = ({ field, form, ...args }) => {
  return <input type="text" {...field} {...form} {...args} />;
};
