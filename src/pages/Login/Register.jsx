import {
  Box,
  Button,
  Checkbox,
  Flex,
  HStack,
  Icon,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  MdArrowForward,
  MdOutlineLock,
  MdOutlineMail,
  MdOutlineVisibility,
} from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { FaApple, FaFacebook, FaRegUser } from "react-icons/fa";
import { useAuthStore } from "../../store";
import { useLogin, useRegister } from "../../service/Api/UserAuth";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

function Register() {
  const { mutateAsync: registerUser } = useRegister();

  const [showPassword, setShowPassword] = useState(false);
  const [registerError, setRegisterError] = useState("");
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      userName: "",
      password: "",
      confirmPassword: "",
    },
  });

  const confirmPasswordValidation = (value) => {
    return value === getValues("password") || "Passwords do not match";
  };

  const onSubmit = async (data) => {
    setRegisterError("");
    try {
      const response = await registerUser(data);
      navigate("/login");
    } catch (error) {
      console.error("Register error:", error);
      setRegisterError(
        error?.response?.data?.message ||
          "Invalid email or password. Please try again.",
      );
    }
  };

  return (
    <Box as="form" onSubmit={handleSubmit(onSubmit)}>
      <VStack align="stretch" gap={4}>
        {/* Email */}
        <VStack align="stretch" gap="6px">
          <Text fontSize="13px" fontWeight="600" color="#061449">
            Full Name
          </Text>
          <HStack
            bg="#f4f5fb"
            borderRadius="10px"
            px={3}
            h="44px"
            border="1px solid"
            borderColor={errors.email ? "#e53e3e" : "#e7e9f3"}
            _focusWithin={{ borderColor: errors.email ? "#e53e3e" : "#061449" }}
          >
            <Icon asChild boxSize="16px" color="#8a8d9f">
              <FaRegUser />
            </Icon>

            <Input
              {...register("userName", {
                required: "userName is required",
                pattern: {
                  value: /^[a-zA-Z\s]+$/,
                  message: "Please enter a valid userName",
                },
              })}
              variant="unstyled"
              placeholder="John Doe"
              fontSize="14px"
              bg="#f4f5fb"
            />
          </HStack>
          {errors.userName && (
            <Text fontSize="12px" color="#e53e3e">
              {errors.userName.message}
            </Text>
          )}
        </VStack>
        <VStack align="stretch" gap="6px">
          <Text fontSize="13px" fontWeight="600" color="#061449">
            Email Address
          </Text>
          <HStack
            bg="#f4f5fb"
            borderRadius="10px"
            px={3}
            h="44px"
            border="1px solid"
            borderColor={errors.email ? "#e53e3e" : "#e7e9f3"}
            _focusWithin={{ borderColor: errors.email ? "#e53e3e" : "#061449" }}
          >
            <Icon asChild boxSize="16px" color="#8a8d9f">
              <MdOutlineMail />
            </Icon>

            <Input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Please enter a valid email address",
                },
              })}
              variant="unstyled"
              placeholder="you@example.com"
              fontSize="14px"
              bg="#f4f5fb"
            />
          </HStack>
          {errors.email && (
            <Text fontSize="12px" color="#e53e3e">
              {errors.email.message}
            </Text>
          )}
        </VStack>
        {/* Password */}
        <HStack>
          <VStack align="stretch" gap="6px">
            <Text fontSize="13px" fontWeight="600" color="#061449">
              Password
            </Text>

            <HStack
              bg="#f4f5fb"
              borderRadius="10px"
              px={3}
              h="44px"
              border="1px solid"
              borderColor={errors.password ? "#e53e3e" : "#e7e9f3"}
              _focusWithin={{
                borderColor: errors.password ? "#e53e3e" : "#061449",
              }}
            >
              <Icon asChild boxSize="16px" color="#8a8d9f">
                <MdOutlineLock />
              </Icon>
              <Input
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
                variant="unstyled"
                bg="#f4f5fb"
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
                fontSize="14px"
              />
              <Icon
                asChild
                boxSize="16px"
                color="#8a8d9f"
                cursor="pointer"
                onClick={() => setShowPassword((value) => !value)}
              >
                <MdOutlineVisibility />
              </Icon>
            </HStack>
            {errors.password && (
              <Text fontSize="12px" color="#e53e3e">
                {errors.password.message}
              </Text>
            )}
          </VStack>

          {/* Confirm Password */}
          <VStack align="stretch" gap="6px">
            <Text fontSize="13px" fontWeight="600" color="#061449">
              Confirm Password
            </Text>

            <HStack
              bg="#f4f5fb"
              borderRadius="10px"
              px={3}
              h="44px"
              border="1px solid"
              borderColor={errors.confirmPassword ? "#e53e3e" : "#e7e9f3"}
              _focusWithin={{
                borderColor: errors.confirmPassword ? "#e53e3e" : "#061449",
              }}
            >
              <Icon asChild boxSize="16px" color="#8a8d9f">
                <IoCheckmarkDoneCircleOutline />
              </Icon>
              <Input
                {...register("confirmPassword", {
                  required: "Please confirm your password",
                  validate: confirmPasswordValidation,
                })}
                variant="unstyled"
                bg="#f4f5fb"
                type={showPassword ? "text" : "password"}
                placeholder="Confirm password"
                fontSize="14px"
              />
              <Icon
                asChild
                boxSize="16px"
                color="#8a8d9f"
                cursor="pointer"
                onClick={() => setShowPassword((value) => !value)}
              >
                <MdOutlineVisibility />
              </Icon>
            </HStack>
            {errors.confirmPassword && (
              <Text fontSize="12px" color="#e53e3e">
                {errors.confirmPassword.message}
              </Text>
            )}
          </VStack>
        </HStack>

        {/* General register error (from API) */}
        {registerError && (
          <Text fontSize="13px" color="#e53e3e" textAlign="center">
            {registerError}
          </Text>
        )}

        {/* Remember Me */}
        <Flex justify="space-between" align="center">
          <HStack gap={2}>
            <Checkbox.Root defaultChecked colorPalette="orange" size="sm">
              <Checkbox.HiddenInput /> <Checkbox.Control />
            </Checkbox.Root>
            <Text fontSize="13px" color="#3a3f55">
              Remember me for 30 days
            </Text>
          </HStack>
          <HStack gap={1}>
            <Box w="6px" h="6px" borderRadius="full" bg="#63a37c" />
            <Text fontSize="12px" color="#6b7089">
              Cloud Synced
            </Text>
          </HStack>
        </Flex>
        {/* Sign In */}
        <Button
          as="button"
          w="100%"
          h="46px"
          bg="#061449"
          color="white"
          borderRadius="10px"
          align="center"
          justify="center"
          gap={2}
          fontWeight="700"
          fontSize="14px"
          _hover={{ bg: "#0b1c30" }}
          type="submit"
        >
          <Text>Sign In to NexusMart</Text>
          <Icon asChild boxSize="16px">
            <MdArrowForward />
          </Icon>
        </Button>
        {/* Divider */}
        <Text
          textAlign="center"
          fontSize="12px"
          color="#8a8d9f"
          fontWeight="600"
          letterSpacing="wide"
        >
          OR CONTINUE WITH
        </Text>
        {/* Social Login */}
        <HStack gap={3}>
          {/* Google */}
          <Flex
            flex="1"
            h="42px"
            border="1px solid #e7e9f3"
            borderRadius="10px"
            align="center"
            justify="center"
            gap={2}
            fontSize="13px"
            fontWeight="600"
            color="#3a3f55"
            cursor="pointer"
            _hover={{ bg: "#f4f5fb" }}
          >
            <Icon asChild boxSize="16px">
              <FcGoogle />
            </Icon>
            <Text>Google</Text>
          </Flex>
          {/* Apple */}
          <Flex
            flex="1"
            h="42px"
            border="1px solid #e7e9f3"
            borderRadius="10px"
            align="center"
            justify="center"
            gap={2}
            fontSize="13px"
            fontWeight="600"
            color="#3a3f55"
            cursor="pointer"
            _hover={{ bg: "#f4f5fb" }}
          >
            <Icon asChild boxSize="16px">
              <FaApple />
            </Icon>
            <Text>Apple</Text>
          </Flex>
          {/* Facebook */}
          <Flex
            flex="1"
            h="42px"
            border="1px solid #e7e9f3"
            borderRadius="10px"
            align="center"
            justify="center"
            gap={2}
            fontSize="13px"
            fontWeight="600"
            color="#3a3f55"
            cursor="pointer"
            _hover={{ bg: "#f4f5fb" }}
          >
            <Icon asChild boxSize="16px" color="#1877f2">
              <FaFacebook />
            </Icon>
            <Text>Facebook</Text>
          </Flex>
        </HStack>
      </VStack>
      {/* Footer */}
      <VStack gap="6px" mt="auto" pt={6}>
        <Text fontSize="13px" color="#3a3f55">
          Don't have an account?
          <Text as="span" color="#ab3500" fontWeight="700" cursor="pointer">
            Sign Up for free
          </Text>
        </Text>
        <HStack gap={1} color="#8a8d9f">
          <Icon asChild boxSize="12px">
            <MdOutlineLock />
          </Icon>
          <Text fontSize="11px">
            256-Bit SSL Encrypted & PCI-DSS Level 1 Certified
          </Text>
        </HStack>
      </VStack>
    </Box>
  );
}
export default Register;
