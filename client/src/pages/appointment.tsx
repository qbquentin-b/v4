import { useLocation } from "wouter";
import { useEffect } from "react";

export default function AppointmentPage() {
  const [, setLocation] = useLocation();
  
  useEffect(() => {
    // Redirect to contact page since appointment booking is removed
    setLocation("/contact");
  }, [setLocation]);

  return null;
}
