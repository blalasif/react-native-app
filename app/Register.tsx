import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native";
import * as Yup from "yup";

const schema = Yup.object().shape({
  email: Yup.string()
    .required("Email is Required")
    .email("Please Enter a valid Email"),
  password: Yup.string()
    .required("Password is Required")
    .min(6, "Password be at least 6 character long")
    .max(20),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Password must match")
    .required("Confirm Password is Required"),
});

const Register = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
    trigger,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => {
    console.log("🚀 ~ onSubmit ~ data:", data);
    Alert.alert("success", "Form Submitted Successfully");
    reset();
  };
  return (
    <View className="flex-1 border  justify-center items-center bg-gray-200 p-4 ">
      <Text className="text-4xl text-gray-800 text-center mb-8 font-bold">
        Create Account
      </Text>
      <Controller
        control={control}
        name="email"
        render={({ field: { onChange, onBlur, value } }) => (
          <>
            <TextInput
              className="boder w-full border-gray-300 rounded-lg h-[55px] ps-4 mb-4 bg-white shadow-lg"
              placeholder="Enter Your Email"
              placeholderTextColor="#A0AEC0"
              onBlur={() => {
                onBlur();
                trigger("email");
              }}
              onChangeText={(text) => {
                onChange(text);
                trigger("email");
              }}
              value={value}
              keyboardType="email-address"
              autoCapitalize="none"
            />
            {typeof errors.email?.message === "string" && (
              <Text className="text-red-600 mb-2">{errors.email.message}</Text>
            )}
          </>
        )}
      />
      <Controller
        control={control}
        name="password"
        render={({ field: { onChange, onBlur, value } }) => (
          <>
            <TextInput
              className="boder border-gray-300 rounded-lg h-[55px] ps-4 mb-4 w-full bg-white shadow-lg"
              placeholder="Enter Your Password"
              placeholderTextColor="#A0AEC0"
              onBlur={() => {
                onBlur();
                trigger("password");
              }}
              onChangeText={(text) => {
                onChange(text);
                trigger("password");
              }}
              value={value}
              secureTextEntry
            />
            {typeof errors.password?.message === "string" && (
              <Text className="text-red-600 mb-2">
                {errors.password.message}
              </Text>
            )}
          </>
        )}
      />
      <Controller
        control={control}
        name="confirmPassword"
        render={({ field: { onChange, onBlur, value } }) => (
          <>
            <TextInput
              className="boder border-gray-300 rounded-lg ps-4 mb-4 h-[55px] w-full  bg-white shadow-lg"
              placeholder="Enter Your Confirm Password"
              placeholderTextColor="#A0AEC0"
              onBlur={() => {
                onBlur();
                trigger("confirmPassword");
              }}
              onChangeText={(text) => {
                onChange(text);
                trigger("confirmPassword");
              }}
              value={value}
              secureTextEntry
            />
            {typeof errors.confirmPassword?.message === "string" && (
              <Text className="text-red-600 mb-2">
                {errors.confirmPassword.message}
              </Text>
            )}
          </>
        )}
      />
      <TouchableOpacity
        className="bg-blue-600 p-4 rounded-lg shadow-lg w-full"
        onPress={handleSubmit(onSubmit)}
      >
        <Text className="text-white text-center text-lg font-semibold">
          Register
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Register;
