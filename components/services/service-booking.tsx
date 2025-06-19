"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CalendarIcon, ChevronLeft, ChevronRight } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { format } from "date-fns";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { sendBookingEmail } from "@/lib/actions/send-booking-email";
import toast from "react-hot-toast";

// Zod schemas for each step
const personalInfoSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
});

const tripDetailsSchema = z.object({
  serviceType: z.string().min(1, "Please select a service type"),
  travelDates: z.object({
    from: z.date({ required_error: "Please select a start date" }),
    to: z.date({ required_error: "Please select an end date" }),
  }),
  specialRequests: z.string().optional(),
});

// Combined schema for final submission
const fullFormSchema = personalInfoSchema.merge(tripDetailsSchema);

type FormData = z.infer<typeof fullFormSchema>;

const serviceTypeOptions = [
  { value: "safari-tours", label: "Game Park Tours & Gorilla Trekking" },
  { value: "airport-transfers", label: "Airport Pickups & Drops" },
  { value: "inland-transport", label: "Inland Transportation" },
  { value: "hotel-booking", label: "Hotel Bookings" },
  { value: "furnished-apartments", label: "Fully Furnished Apartments" },
  { value: "expatriate-settlement", label: "Expatriate Settlement Support" },
];

export default function ServiceBooking() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(fullFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      serviceType: "",
      travelDates: {
        from: undefined,
        to: undefined,
      },
      specialRequests: "",
    },
    mode: "onChange",
  });

  const { watch, trigger, getValues } = form;
  const formValues = watch();

  const validateCurrentStep = async () => {
    if (step === 1) {
      return await trigger(["name", "email", "phone"]);
    } else if (step === 2) {
      return await trigger(["serviceType", "travelDates"]);
    }
    return true;
  };

  const nextStep = async () => {
    const isValid = await validateCurrentStep();
    if (isValid) {
      setStep((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    setStep((prev) => prev - 1);
  };

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);

    try {
      const result = await sendBookingEmail(data);
      if (result.success) {
        setIsSuccess(true);
      } else {
        console.error("Failed to send email:", result.error);
        toast.error("Something went wrong, please try again!");
      }
    } catch (error) {
      console.error("Submission error:", error);
      toast.error("Something went wrong, please try again!");
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setIsSuccess(false);
    setStep(1);
    form.reset();
  };

  const getStepProgress = () => (step / 3) * 100;

  if (isSuccess) {
    return (
      <section className="bg-brand/10 py-24" id="service-booking">
        <div className="custom-container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="border-0 bg-green-50">
                <CardContent className="p-12 text-center">
                  <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
                    <svg
                      className="h-10 w-10 text-green-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3 className="mb-4 text-2xl font-bold text-gray-900">
                    Booking Request Received!
                  </h3>
                  <p className="mb-6 text-gray-600">
                    Thank you for your interest in our services. Our team will
                    review your request and contact you within 24 hours to
                    discuss your Ugandan adventure in detail.
                  </p>
                  <Button
                    onClick={resetForm}
                    className="bg-green-600 hover:bg-green-700"
                  >
                    Submit Another Request
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-brand/10 py-24" id="service-booking">
      <div className="custom-container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <motion.h2
              className="mb-6 text-4xl font-bold text-gray-900"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Book Your Service
            </motion.h2>
            <motion.p
              className="mx-auto max-w-2xl text-lg text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Ready to experience Uganda with us? Fill out this form to start
              planning your adventure. Our team will contact you within 24 hours
              to discuss your requirements in detail.
            </motion.p>
          </div>

          <Card className="overflow-hidden border-0 shadow-lg">
            <CardHeader className="bg-gray-50">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-gray-500">
                  Step {step} of 3
                </CardTitle>
                <span className="text-sm font-medium text-gray-500">
                  {Math.round(getStepProgress())}% Complete
                </span>
              </div>
              <Progress value={getStepProgress()} className="mt-2" />

              <div className="mt-4 flex items-center justify-between">
                <div className="flex flex-col items-center">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-full ${
                      step >= 1
                        ? "bg-blue-600 text-white"
                        : "bg-gray-200 text-gray-500"
                    }`}
                  >
                    1
                  </div>
                  <span className="mt-2 text-sm text-gray-500">
                    Personal Info
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-full ${
                      step >= 2
                        ? "bg-blue-600 text-white"
                        : "bg-gray-200 text-gray-500"
                    }`}
                  >
                    2
                  </div>
                  <span className="mt-2 text-sm text-gray-500">
                    Trip Details
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-full ${
                      step >= 3
                        ? "bg-blue-600 text-white"
                        : "bg-gray-200 text-gray-500"
                    }`}
                  >
                    3
                  </div>
                  <span className="mt-2 text-sm text-gray-500">Review</span>
                </div>
              </div>
            </CardHeader>

            <CardContent className="p-8">
              <Form {...form}>
                <div className="space-y-6">
                  {step === 1 && (
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5 }}
                      className="space-y-6"
                    >
                      <h3 className="text-xl font-bold text-gray-900">
                        Personal Information
                      </h3>

                      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Full Name *</FormLabel>
                              <FormControl>
                                <Input placeholder="John Doe" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email Address *</FormLabel>
                              <FormControl>
                                <Input
                                  type="email"
                                  placeholder="johndoe@gmail.com"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone Number *</FormLabel>
                            <FormControl>
                              <Input
                                type="tel"
                                placeholder="+256774892342"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </motion.div>
                  )}

                  {step === 2 && (
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5 }}
                      className="space-y-6"
                    >
                      <h3 className="text-xl font-bold text-gray-900">
                        Trip Details
                      </h3>

                      <FormField
                        control={form.control}
                        name="serviceType"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Service Type *</FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select a service" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {serviceTypeOptions.map((option) => (
                                  <SelectItem
                                    key={option.value}
                                    value={option.value}
                                  >
                                    {option.label}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="travelDates"
                        render={({ field }) => (
                          <FormItem className="flex flex-col">
                            <FormLabel>Travel Dates *</FormLabel>
                            <Popover>
                              <PopoverTrigger asChild>
                                <FormControl>
                                  <Button
                                    variant={"outline"}
                                    className={cn(
                                      "w-full pl-3 text-left font-normal",
                                      !field.value && "text-muted-foreground",
                                    )}
                                  >
                                    {field.value?.from ? (
                                      field.value.to ? (
                                        <>
                                          {format(
                                            field.value.from,
                                            "LLL dd, y",
                                          )}{" "}
                                          -{" "}
                                          {format(field.value.to, "LLL dd, y")}
                                        </>
                                      ) : (
                                        format(field.value.from, "LLL dd, y")
                                      )
                                    ) : (
                                      <span>Pick your travel dates</span>
                                    )}
                                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                  </Button>
                                </FormControl>
                              </PopoverTrigger>
                              <PopoverContent
                                className="w-auto p-0"
                                align="start"
                              >
                                <Calendar
                                  initialFocus
                                  mode="range"
                                  defaultMonth={field.value?.from}
                                  selected={field.value}
                                  onSelect={field.onChange}
                                  numberOfMonths={2}
                                  disabled={(date) =>
                                    date < new Date() ||
                                    date < new Date("1900-01-01")
                                  }
                                />
                              </PopoverContent>
                            </Popover>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="specialRequests"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>
                              Special Requests or Requirements
                            </FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Tell us about any special requirements or preferences..."
                                className="min-h-[100px]"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </motion.div>
                  )}

                  {step === 3 && (
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5 }}
                      className="space-y-6"
                    >
                      <h3 className="text-xl font-bold text-gray-900">
                        Review Your Information
                      </h3>

                      <Card className="bg-gray-50">
                        <CardContent className="space-y-6 p-6">
                          <div>
                            <h4 className="mb-4 font-semibold text-gray-900">
                              Personal Information
                            </h4>
                            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                              <div>
                                <p className="text-sm text-gray-500">
                                  Full Name
                                </p>
                                <p className="font-medium">{formValues.name}</p>
                              </div>
                              <div>
                                <p className="text-sm text-gray-500">
                                  Email Address
                                </p>
                                <p className="font-medium">
                                  {formValues.email}
                                </p>
                              </div>
                              <div>
                                <p className="text-sm text-gray-500">
                                  Phone Number
                                </p>
                                <p className="font-medium">
                                  {formValues.phone}
                                </p>
                              </div>
                            </div>
                          </div>

                          <div>
                            <h4 className="mb-4 font-semibold text-gray-900">
                              Trip Details
                            </h4>
                            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                              <div>
                                <p className="text-sm text-gray-500">
                                  Service Type
                                </p>
                                <p className="font-medium">
                                  {
                                    serviceTypeOptions.find(
                                      (opt) =>
                                        opt.value === formValues.serviceType,
                                    )?.label
                                  }
                                </p>
                              </div>
                              <div>
                                <p className="text-sm text-gray-500">
                                  Travel Dates
                                </p>
                                <p className="font-medium">
                                  {formValues.travelDates?.from &&
                                  formValues.travelDates?.to
                                    ? `${format(formValues.travelDates.from, "LLL dd, y")} - ${format(formValues.travelDates.to, "LLL dd, y")}`
                                    : "Not selected"}
                                </p>
                              </div>
                            </div>

                            {formValues.specialRequests && (
                              <div className="mt-4">
                                <p className="text-sm text-gray-500">
                                  Special Requests
                                </p>
                                <p className="font-medium">
                                  {formValues.specialRequests}
                                </p>
                              </div>
                            )}
                          </div>
                        </CardContent>
                      </Card>

                      <p className="text-sm text-gray-500">
                        By submitting this form, you agree to be contacted by
                        our team regarding your travel inquiry. We respect your
                        privacy and will never share your information with third
                        parties.
                      </p>
                    </motion.div>
                  )}

                  <div className="flex justify-between pt-6">
                    {step > 1 && (
                      <Button
                        type="button"
                        variant="outline"
                        onClick={prevStep}
                        className="flex items-center gap-2"
                      >
                        <ChevronLeft className="h-4 w-4" />
                        Back
                      </Button>
                    )}

                    {step < 3 ? (
                      <Button
                        type="button"
                        onClick={nextStep}
                        className="ml-auto flex items-center gap-2"
                      >
                        Next
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    ) : (
                      <Button
                        type="button"
                        onClick={() => form.handleSubmit(onSubmit)()}
                        disabled={isSubmitting}
                        className="ml-auto flex items-center gap-2"
                      >
                        {isSubmitting ? (
                          "Submitting..."
                        ) : (
                          <>
                            Submit Request
                            <Send className="h-4 w-4" />
                          </>
                        )}
                      </Button>
                    )}
                  </div>
                </div>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
