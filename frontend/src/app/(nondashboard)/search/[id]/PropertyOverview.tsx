import { useGetPropertyQuery } from "@/state/api";
import { MapPin, Star } from "lucide-react";
import React from "react";

const PropertyOverview = ({ propertyId }: PropertyOverviewProps) => {
  const {
    data: property,
    isError,
    isLoading,
  } = useGetPropertyQuery(propertyId);

  if (isLoading) return <>Loading...</>;
  if (isError || !property) {
    return <>Property not Found</>;
  }

  return (
    <div>
      {/* Header */}
      <div className="mb-4">
        <div className="text-sm text-gray-500 mb-1">
          {property.location?.country} / {property.location?.state} /{" "}
          <span className="font-semibold text-gray-600">
            {property.location?.city}
          </span>
        </div>
        <h1 className="text-3xl font-bold my-5">{property.name}</h1>
        <div className="flex justify-between items-center">
          <span className="flex items-center text-gray-500">
            <MapPin className="w-4 h-4 mr-1 text-gray-700" />
            {property.location?.city}, {property.location?.state},{" "}
            {property.location?.country}
          </span>
          <div className="flex justify-between items-center gap-3">
            <span className="flex items-center text-yellow-500">
              <Star className="w-4 h-4 mr-1 fill-current" />
              {property.averageRating.toFixed(1)} ({property.numberOfReviews}{" "}
              Reviews)
            </span>
            <span className="text-green-600">Verified Listing</span>
          </div>
        </div>
      </div>

      {/* Details */}
      <div className="border border-primary-200 rounded-xl p-6 mb-6">
        <div className="flex justify-between items-center gap-4 px-5">
          <div>
            <div className="text-sm text-gray-500">Monthly Rent</div>
            <div className="font-semibold">
              ${property.pricePerMonth.toLocaleString()}
            </div>
          </div>
          <div className="border-l border-gray-300 h-10"></div>
          <div>
            <div className="text-sm text-gray-500">Bedrooms</div>
            <div className="font-semibold">{property.beds} bd</div>
          </div>
          <div className="border-l border-gray-300 h-10"></div>
          <div>
            <div className="text-sm text-gray-500">Bathrooms</div>
            <div className="font-semibold">{property.baths} ba</div>
          </div>
          <div className="border-l border-gray-300 h-10"></div>
          <div>
            <div className="text-sm text-gray-500">Square Feet</div>
            <div className="font-semibold">
              {property.squareFeet.toLocaleString()} sq ft
            </div>
          </div>
        </div>
      </div>

      {/* Summary */}
      <div className="my-16">
        <h2 className="text-xl font-semibold mb-5">About {property.name}</h2>
        <p className="text-gray-500 leading-7">
          {property.description}
 Discover the pinnacle of coastal living at Seacrest Homes, where seaside serenity meets urban convenience. Our brand-new community offers elegant two- and three-bedroom floor plans, each appointed with bespoke designer finishes, gleaming quartz countertops, stainless-steel Whirlpool appliances, a dedicated office nook, and in-unit full-size washer and dryer.

Step outside into your private retreat: lounge by shimmering pools and bubbling spas beneath stylish cabanas, or unwind in lush, landscaped courtyards with seamless indoor/outdoor seating. Fire up the grill in our outdoor BBQ area as you take in sweeping, unobstructed vistas from Palos Verdes to the glittering Downtown skyline—breathtaking by day, enchanted by night.

Stay active in our state-of-the-art fitness club and tranquil yoga studio, or skip the commute altogether and host meetings in our fully equipped business center, complete with conference room, high-speed internet, and a cozy coffee lounge.

Ideally situated just minutes from pristine beaches and with effortless access to the 110, 405, and 91 freeways, Seacrest Homes puts the best of the South Bay at your doorstep. Shop ‘til you drop at the Del Amo Fashion Center, the largest mall in the Western U.S., or rest easy knowing top-rated medical care is nearby: Kaiser Hospital, UCLA Harbor Medical Center, Torrance Memorial, and Providence Little Company of Mary.

Experience luxury living reimagined in the heart of 90501—schedule your tour of Seacrest Homes today and make this extraordinary lifestyle your new address.
        </p>
      </div>
    </div>
  );
};

export default PropertyOverview;