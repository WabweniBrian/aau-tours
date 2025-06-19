/* eslint-disable react/no-unescaped-entities */
"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { AlertTriangle, Settings, RotateCcw } from "lucide-react";

export default function RoadSafetySettings() {
  const [dontShowAgain, setDontShowAgain] = useState(false);
  const [showLater, setShowLater] = useState(false);
  const [lastShown, setLastShown] = useState<string | null>(null);

  useEffect(() => {
    // Load current settings from localStorage
    const dontShow =
      localStorage.getItem("aau-road-safety-dont-show") === "true";
    const showLaterSetting =
      localStorage.getItem("aau-road-safety-show-later") === "true";
    const lastShownDate = localStorage.getItem("aau-road-safety-last-shown");

    setDontShowAgain(dontShow);
    setShowLater(showLaterSetting);
    setLastShown(lastShownDate);
  }, []);

  const handleDontShowToggle = (checked: boolean) => {
    setDontShowAgain(checked);
    if (checked) {
      localStorage.setItem("aau-road-safety-dont-show", "true");
      // Clear show later setting if don't show is enabled
      localStorage.removeItem("aau-road-safety-show-later");
      localStorage.removeItem("aau-road-safety-last-shown");
      setShowLater(false);
      setLastShown(null);
    } else {
      localStorage.removeItem("aau-road-safety-dont-show");
    }
  };

  const resetSettings = () => {
    localStorage.removeItem("aau-road-safety-dont-show");
    localStorage.removeItem("aau-road-safety-show-later");
    localStorage.removeItem("aau-road-safety-last-shown");
    setDontShowAgain(false);
    setShowLater(false);
    setLastShown(null);
  };

  const showModalNow = () => {
    // Reset all settings and trigger modal to show
    resetSettings();
    // Reload page to trigger modal
    window.location.reload();
  };

  return (
    <Card className="max-w-md">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Settings className="h-5 w-5" />
          Road Safety Modal Settings
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label htmlFor="dont-show">Don't show road safety tips</Label>
            <p className="text-sm text-gray-500">
              Disable the road safety modal completely
            </p>
          </div>
          <Switch
            id="dont-show"
            checked={dontShowAgain}
            onCheckedChange={handleDontShowToggle}
          />
        </div>

        {showLater && lastShown && (
          <div className="rounded-lg border border-yellow-200 bg-yellow-50 p-3">
            <div className="flex items-start gap-2">
              <AlertTriangle className="mt-0.5 h-4 w-4 text-yellow-600" />
              <div>
                <p className="text-sm font-medium text-yellow-800">
                  Modal set to show later
                </p>
                <p className="text-xs text-yellow-700">
                  Last shown: {new Date(lastShown).toLocaleDateString()} at{" "}
                  {new Date(lastShown).toLocaleTimeString()}
                </p>
              </div>
            </div>
          </div>
        )}

        <div className="space-y-3">
          <Button onClick={showModalNow} className="w-full" variant="outline">
            <AlertTriangle className="mr-2 h-4 w-4" />
            Show Road Safety Tips Now
          </Button>

          <Button
            onClick={resetSettings}
            variant="secondary"
            className="w-full"
          >
            <RotateCcw className="mr-2 h-4 w-4" />
            Reset All Settings
          </Button>
        </div>

        <div className="space-y-1 text-xs text-gray-500">
          <p>• Modal appears 10 seconds after page load</p>
          <p>• "Show me later" delays modal for 24 hours</p>
          <p>• "Don't show again" permanently disables modal</p>
          <p>• Settings are stored in your browser's local storage</p>
        </div>
      </CardContent>
    </Card>
  );
}
