<script setup>
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function PackagesSection() {
  return (
    <div className="columns-1 md:columns-2 gap-6 p-4 [column-fill:_balance]">
      {/* Complete Care Package */}
      <Card className="break-inside-avoid rounded-2xl shadow-md mb-6 animate-fade-in delay-0">
        <CardContent className="p-4">
          <h2 className="text-xl font-bold mb-2">Complete Care Package</h2>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>Booking & Inquiries Management</li>
            <li>Guest Welcome & Key Handover</li>
            <li>Property Inspection & Regular Maintenance Checks</li>
            <li>Basic Amenities</li>
            <li>Basic Maintenance</li>
          </ul>
          <p className="text-sm mt-4 font-medium">Commission: 20% of the booking fee</p>
          <p className="text-xs mb-2">(Commission incentivises high-quality service)</p>
          <h3 className="text-sm font-semibold mt-2">Optional Add-Ons:</h3>
          <ul className="list-disc list-inside text-sm space-y-1">
            <li>Special Occasion Packages – from R600</li>
            <li>Mid-Stay Cleaning – from R300 per cleaning</li>
            <li>Laundry Service</li>
          </ul>
          <Button className="w-full mt-4">Enquire Now</Button>
        </CardContent>
      </Card>

      {/* Premium Care Package (staggered down) */}
      <Card className="break-inside-avoid rounded-2xl shadow-md mb-6 animate-fade-in delay-100 mt-12">
        <CardContent className="p-4">
          <h2 className="text-xl font-bold mb-2">Premium Care Package</h2>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>Full Booking & Inquiry Management</li>
            <li>Guest Welcome & VIP Check-in</li>
            <li>Professional Cleaning After Check-out</li>
            <li>Laundry Service</li>
            <li>High-End Amenities</li>
            <li>Basic & Minor Maintenance</li>
            <li>Property Inspection & Regular Maintenance Checks</li>
            <li>Guest Experience Welcome Pack</li>
          </ul>
          <p className="text-sm mt-4 font-medium">Flat Fee: From R1200 per month</p>
          <p className="text-sm font-medium">Commission: 25% of the booking fee</p>
          <h3 className="text-sm font-semibold mt-2">Optional Add-Ons:</h3>
          <ul className="list-disc list-inside text-sm space-y-1">
            <li>Special Occasion Packages – from R600</li>
            <li>Laundry Service</li>
            <li>Mid-Stay Cleaning – from R300 per cleaning</li>
          </ul>
          <Button className="w-full mt-4">Sign Up Now</Button>
        </CardContent>
      </Card>

      {/* Cleaning Services */}
      <Card className="break-inside-avoid rounded-2xl shadow-md mb-6 animate-fade-in delay-200">
        <CardContent className="p-4">
          <h2 className="text-xl font-bold mb-2">Cleaning Services</h2>
          <p className="text-sm font-medium mb-2">Standard Cleaning – From R460</p>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>Living, dining, kitchen, patio cleaned</li>
            <li>Includes all cleaning supplies</li>
          </ul>
          <h3 className="text-sm font-semibold mt-4">Add-Ons:</h3>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>Fridge Defrosting and Cleaning</li>
            <li>Essential Items Restocking</li>
            <li>Personalized Guest Setup</li>
            <li>Hot Tub Cleaning – From R150</li>
          </ul>
          <p className="text-sm mt-4">Why use this service? Hassle-free, professional, ideal for frequent guest turnover.</p>
          <Button className="w-full mt-4">Book Cleaning</Button>
        </CardContent>
      </Card>

      {/* Maintenance Services (staggered down) */}
      <Card className="break-inside-avoid rounded-2xl shadow-md mb-6 animate-fade-in delay-300 mt-12">
        <CardContent className="p-4">
          <h2 className="text-xl font-bold mb-2">Maintenance Services</h2>
          <ul className="list-disc list-inside text-sm space-y-1">
            <li>Basic Maintenance – From R350</li>
            <li>Emergency Maintenance – From R600</li>
            <li>Maintenance Package – From R1,000/mo</li>
          </ul>
          <h3 className="text-sm font-semibold mt-4">Service Includes:</h3>
          <ul className="list-disc list-inside text-sm space-y-1">
            <li>Minor plumbing, electrical & appliance fixes</li>
            <li>Door, window, cupboard repairs</li>
            <li>Urgent callouts (safety issues, bursts, etc.)</li>
            <li>Monthly checkups + priority response</li>
          </ul>
          <p className="text-sm mt-4">Why choose us? Ensure safety, comfort, and fewer repairs over time.</p>
        </CardContent>
      </Card>
    </div>
  );
}
