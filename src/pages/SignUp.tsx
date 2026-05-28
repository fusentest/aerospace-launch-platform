import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Rocket, Mail, Lock, User, AlertCircle, CheckCircle, Eye, EyeOff } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const signUpSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  confirmPassword: z.string(),
  agreeToTerms: z.boolean().refine(val => val === true, "You must agree to the terms"),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

type SignUpFormData = z.infer<typeof signUpSchema>;

const SignUp = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema),
  });

  const password = watch("password");

  const passwordStrength = {
    hasLength: password?.length >= 8,
    hasUppercase: /[A-Z]/.test(password || ""),
    hasLowercase: /[a-z]/.test(password || ""),
    hasNumber: /[0-9]/.test(password || ""),
    hasSpecial: /[!@#$%^&*]/.test(password || ""),
  };

  const strengthScore = Object.values(passwordStrength).filter(Boolean).length;

  const onSubmit = async (data: SignUpFormData) => {
    setIsLoading(true);
    setSuccessMessage("");

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setSuccessMessage("Account created successfully! Redirecting to sign in...");
      setTimeout(() => {
        navigate("/signin");
      }, 2000);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-background via-background/95 to-background" />

      {/* Floating elements */}
      <div className="absolute top-20 left-10 animate-float opacity-20">
        <Rocket className="h-24 w-24 text-primary" />
      </div>
      <div className="absolute bottom-20 right-10 animate-float opacity-20" style={{ animationDelay: '2s' }}>
        <Rocket className="h-32 w-32 text-accent rotate-45" />
      </div>

      {/* Sign Up Card */}
      <Card className="w-full max-w-lg z-10 bg-card/80 backdrop-blur-xl border-border shadow-2xl">
        <CardHeader className="space-y-4 text-center">
          <div className="mx-auto p-4 bg-primary/10 rounded-full w-fit glow-primary">
            <Rocket className="h-12 w-12 text-primary" />
          </div>
          <div>
            <CardTitle className="text-3xl font-bold glow-cyan">Launch Your Journey</CardTitle>
            <CardDescription className="text-base mt-2">
              Create your AeroLaunch account and join mission control
            </CardDescription>
          </div>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Success Message */}
            {successMessage && (
              <div className="flex items-center gap-2 p-3 bg-green-500/10 border border-green-500/50 rounded-md text-green-400">
                <CheckCircle className="h-4 w-4 flex-shrink-0" />
                <span className="text-sm">{successMessage}</span>
              </div>
            )}

            {/* Full Name */}
            <div className="space-y-2">
              <Label htmlFor="fullName" className="text-foreground">Full Name</Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="fullName"
                  placeholder="John Astronaut"
                  {...register("fullName")}
                  className="pl-10 bg-background/50 border-border focus:border-primary"
                  disabled={isLoading}
                />
              </div>
              {errors.fullName && (
                <div className="flex items-center gap-2 text-destructive text-sm">
                  <AlertCircle className="h-3 w-3" />
                  {errors.fullName.message}
                </div>
              )}
            </div>

            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground">Email Address</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  placeholder="astronaut@aerolaunch.space"
                  {...register("email")}
                  className="pl-10 bg-background/50 border-border focus:border-primary"
                  disabled={isLoading}
                />
              </div>
              {errors.email && (
                <div className="flex items-center gap-2 text-destructive text-sm">
                  <AlertCircle className="h-3 w-3" />
                  {errors.email.message}
                </div>
              )}
            </div>

            {/* Password */}
            <div className="space-y-2">
              <Label htmlFor="password" className="text-foreground">Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  {...register("password")}
                  className="pl-10 pr-10 bg-background/50 border-border focus:border-primary"
                  disabled={isLoading}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
              {errors.password && (
                <div className="flex items-center gap-2 text-destructive text-sm">
                  <AlertCircle className="h-3 w-3" />
                  {errors.password.message}
                </div>
              )}

              {/* Password Strength Indicator */}
              {password && (
                <div className="space-y-2">
                  <div className="flex gap-1 h-1.5">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className={`flex-1 rounded-full transition-colors ${
                          i < strengthScore
                            ? strengthScore <= 2
                              ? "bg-destructive"
                              : strengthScore <= 3
                              ? "bg-yellow-500"
                              : "bg-green-500"
                            : "bg-border/50"
                        }`}
                      />
                    ))}
                  </div>
                  <div className="text-xs text-muted-foreground space-y-1">
                    <div className={passwordStrength.hasLength ? "text-green-400" : ""}>
                      {passwordStrength.hasLength ? "✓" : "○"} At least 8 characters
                    </div>
                    <div className={passwordStrength.hasUppercase ? "text-green-400" : ""}>
                      {passwordStrength.hasUppercase ? "✓" : "○"} Uppercase letter
                    </div>
                    <div className={passwordStrength.hasLowercase ? "text-green-400" : ""}>
                      {passwordStrength.hasLowercase ? "✓" : "○"} Lowercase letter
                    </div>
                    <div className={passwordStrength.hasNumber ? "text-green-400" : ""}>
                      {passwordStrength.hasNumber ? "✓" : "○"} Number
                    </div>
                    <div className={passwordStrength.hasSpecial ? "text-green-400" : ""}>
                      {passwordStrength.hasSpecial ? "✓" : "○"} Special character (!@#$%^&*)
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Confirm Password */}
            <div className="space-y-2">
              <Label htmlFor="confirmPassword" className="text-foreground">Confirm Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="••••••••"
                  {...register("confirmPassword")}
                  className="pl-10 pr-10 bg-background/50 border-border focus:border-primary"
                  disabled={isLoading}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
              {errors.confirmPassword && (
                <div className="flex items-center gap-2 text-destructive text-sm">
                  <AlertCircle className="h-3 w-3" />
                  {errors.confirmPassword.message}
                </div>
              )}
            </div>

            {/* Terms & Conditions */}
            <div className="flex items-start gap-3 space-y-0">
              <Checkbox
                id="terms"
                {...register("agreeToTerms")}
                className="mt-1"
              />
              <Label htmlFor="terms" className="text-sm text-muted-foreground font-normal cursor-pointer">
                I agree to the{" "}
                <a href="#" className="text-primary hover:underline">
                  Terms of Service
                </a>
                {" "}and{" "}
                <a href="#" className="text-primary hover:underline">
                  Privacy Policy
                </a>
              </Label>
            </div>
            {errors.agreeToTerms && (
              <div className="flex items-center gap-2 text-destructive text-sm">
                <AlertCircle className="h-3 w-3" />
                {errors.agreeToTerms.message}
              </div>
            )}

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-11 text-base font-semibold"
            >
              {isLoading ? (
                <>
                  <span className="animate-spin mr-2">⏳</span>
                  Creating account...
                </>
              ) : (
                "Create Account"
              )}
            </Button>

            {/* Sign In Link */}
            <div className="text-center">
              <span className="text-muted-foreground">Already have an account? </span>
              <button
                type="button"
                onClick={() => navigate("/signin")}
                className="text-primary hover:underline font-semibold"
              >
                Sign In
              </button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignUp;
