import { Listing, Reservation, User } from "@prisma/client";

export type SafeListing = Omit<Listing, "createdAt" | "user"> & {
    createdAt: Date;
    user: SafeUser; // Include the user
};

export type SafeReservation = Omit<Reservation, "createdAt" | "startDate" | "endDate" | "listing"> & {
    createdAt: Date; // Ensure this is a Date object
    startDate: Date; // Ensure this is a Date object
    endDate: Date; // Ensure this is a Date object
    listing: SafeListing; // Ensure listing is of SafeListing type
    user: SafeUser; // Include user if necessary
};

export type SafeUser = Omit<
    User,
    "createdAt" | "updatedAt" | "emailVerified"
> & {
    createdAt: Date;
    updatedAt: Date;
    emailVerified: Date | null;
};