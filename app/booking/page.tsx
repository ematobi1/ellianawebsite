import { redirect } from "next/navigation"

export const metadata = {
  title: "Booking - Ellianna Beauty",
  description: "Book your beauty appointment with Ellianna Beauty.",
}

export default function BookingPage() {
  redirect("https://app.acuityscheduling.com/schedule.php?owner=16663445")
}
