/* eslint-disable react/no-unescaped-entities */
"use client";

import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  AlertTriangle,
  Shield,
  Phone,
  Car,
  MapPin,
  Clock,
  Users,
  X,
  CheckCircle,
} from "lucide-react";

interface RoadSafetyModalProps {
  delayMs?: number; // Delay before showing modal (default 10 seconds)
}

export default function RoadSafetyModal({
  delayMs = 10000,
}: RoadSafetyModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentTip, setCurrentTip] = useState(0);

  useEffect(() => {
    // Check localStorage for user preferences
    const dontShowAgain = localStorage.getItem("aau-road-safety-dont-show");
    const lastShown = localStorage.getItem("aau-road-safety-last-shown");
    const showLater = localStorage.getItem("aau-road-safety-show-later");

    // Don't show if user clicked "Don't show again"
    if (dontShowAgain === "true") {
      return;
    }

    // If user clicked "Show me later", check if 24 hours have passed
    if (showLater === "true" && lastShown) {
      const lastShownTime = new Date(lastShown).getTime();
      const now = new Date().getTime();
      const hoursPassed = (now - lastShownTime) / (1000 * 60 * 60);

      if (hoursPassed < 24) {
        return; // Don't show yet
      }
    }

    // Show modal after delay
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, delayMs);

    return () => clearTimeout(timer);
  }, [delayMs]);

  const handleShowLater = () => {
    localStorage.setItem("aau-road-safety-show-later", "true");
    localStorage.setItem(
      "aau-road-safety-last-shown",
      new Date().toISOString(),
    );
    setIsOpen(false);
  };

  const handleDontShowAgain = () => {
    localStorage.setItem("aau-road-safety-dont-show", "true");
    setIsOpen(false);
  };

  const handleClose = () => {
    // Same as "Show me later"
    handleShowLater();
  };

  const roadSafetyTips = [
    {
      category: "Vehicle Safety",
      icon: <Car className="h-5 w-5" />,
      tips: [
        "Always wear seatbelts - it's mandatory in Uganda",
        "Ensure your vehicle has working lights, brakes, and indicators",
        "Keep a first aid kit and emergency tools in your vehicle",
        "Check tire pressure and tread depth before long journeys",
        "Ensure you have a valid driving license and vehicle registration",
      ],
    },
    {
      category: "Driving Guidelines",
      icon: <Shield className="h-5 w-5" />,
      tips: [
        "Drive on the left side of the road (British system)",
        "Speed limits: 50 km/h in towns, 80 km/h on highways, 100 km/h on expressways",
        "Avoid driving at night on rural roads due to poor lighting",
        "Be extra cautious during rainy season (March-May, September-November)",
        "Always carry your driving license, passport, and vehicle documents",
      ],
    },
    {
      category: "Road Conditions",
      icon: <MapPin className="h-5 w-5" />,
      tips: [
        "Many rural roads are unpaved - drive slowly and carefully",
        "Watch for potholes, especially during and after rain",
        "Be aware of livestock and pedestrians on rural roads",
        "Some roads may be impassable during heavy rains",
        "GPS may not be accurate in remote areas - ask locals for directions",
      ],
    },
    {
      category: "Emergency Preparedness",
      icon: <AlertTriangle className="h-5 w-5" />,
      tips: [
        "Keep emergency contacts readily available",
        "Inform someone of your travel route and expected arrival time",
        "Carry extra water, food, and fuel for long journeys",
        "Have a charged phone and portable charger",
        "Know the location of nearest hospitals along your route",
      ],
    },
  ];

  const emergencyContacts = [
    { service: "Police Emergency", number: "999" },
    { service: "Fire & Rescue", number: "999" },
    // { service: "Medical Emergency", number: "911" },
    // { service: "Traffic Police", number: "0800-122-122" },
  ];

  const currentTipData = roadSafetyTips[currentTip];

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-h-[90vh] max-w-4xl overflow-y-auto">
        <DialogHeader className="relative">
          <div className="mb-2 flex items-center gap-3">
            <div className="rounded-full bg-red-100 p-2">
              <AlertTriangle className="h-6 w-6 text-red-600" />
            </div>
            <div>
              <DialogTitle className="text-2xl font-bold text-gray-900">
                Road Safety Guidelines
              </DialogTitle>
              <p className="mt-1 text-sm text-gray-600">
                Essential tips for safe travel in Uganda
              </p>
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-6">
          {/* Header Message */}
          <Card className="border-blue-200 bg-blue-50">
            <CardContent className="p-4">
              <div className="flex items-start gap-3">
                <Shield className="mt-0.5 h-5 w-5 text-blue-600" />
                <div>
                  <h3 className="mb-1 font-semibold text-blue-900">
                    Your Safety is Our Priority
                  </h3>
                  <p className="text-sm text-blue-800">
                    At AAU Uganda, we want to ensure you have a safe and
                    memorable journey. Please take a moment to review these
                    important road safety guidelines for traveling in Uganda.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Tabs */}
          <div className="flex flex-wrap gap-2">
            {roadSafetyTips.map((tip, index) => (
              <Button
                key={index}
                variant={currentTip === index ? "default" : "outline"}
                size="sm"
                onClick={() => setCurrentTip(index)}
                className="flex items-center gap-2"
              >
                {tip.icon}
                {tip.category}
              </Button>
            ))}
          </div>

          {/* Current Tip Content */}
          <Card>
            <CardContent className="p-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-full bg-orange-100 p-2">
                  {currentTipData.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {currentTipData.category}
                </h3>
              </div>

              <div className="space-y-3">
                {currentTipData.tips.map((tip, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                    <p className="text-sm leading-relaxed text-gray-700">
                      {tip}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Emergency Contacts */}
          <Card className="border-red-200 bg-red-50">
            <CardContent className="p-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-full bg-red-100 p-2">
                  <Phone className="h-5 w-5 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-red-900">
                  Emergency Contacts
                </h3>
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {emergencyContacts.map((contact, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between rounded-lg border bg-white p-3"
                  >
                    <span className="font-medium text-gray-900">
                      {contact.service}
                    </span>
                    <Badge variant="destructive" className="font-mono">
                      {contact.number}
                    </Badge>
                  </div>
                ))}
              </div>

              <div className="mt-4 rounded-lg border border-yellow-200 bg-yellow-50 p-3">
                <div className="flex items-start gap-2">
                  <AlertTriangle className="mt-0.5 h-4 w-4 text-yellow-600" />
                  <p className="text-sm text-yellow-800">
                    <strong>Important:</strong> Save these numbers in your phone
                    before traveling. In remote areas, network coverage may be
                    limited.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Additional Tips */}
          <Card className="border-green-200 bg-green-50">
            <CardContent className="p-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-full bg-green-100 p-2">
                  <Users className="h-5 w-5 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-green-900">
                  Travel with AAU Uganda
                </h3>
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
                  <p className="text-sm text-green-800">
                    Our experienced drivers are familiar with local road
                    conditions and safety protocols
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
                  <p className="text-sm text-green-800">
                    All our vehicles undergo regular safety inspections and
                    maintenance
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
                  <p className="text-sm text-green-800">
                    We provide 24/7 support and emergency assistance during your
                    journey
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
                  <p className="text-sm text-green-800">
                    Comprehensive travel insurance options available for all our
                    tours
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Separator />

          {/* Action Buttons */}
          <div className="flex flex-col justify-end gap-3 sm:flex-row">
            <Button
              variant="outline"
              onClick={handleShowLater}
              className="flex items-center gap-2"
            >
              <Clock className="h-4 w-4" />
              Show me later
            </Button>
            <Button
              variant="secondary"
              onClick={handleDontShowAgain}
              className="flex items-center gap-2"
            >
              <X className="h-4 w-4" />
              Don't show again
            </Button>
            <Button onClick={handleClose} className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4" />
              Got it, thanks!
            </Button>
          </div>

          {/* Footer */}
          <div className="border-t pt-4 text-center">
            <p className="text-xs text-gray-500">
              This information is provided by AAU Uganda for your safety. Road
              conditions and regulations may change. Always check current
              conditions before traveling.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
