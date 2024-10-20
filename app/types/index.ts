import { Listing, Reservation, User } from "@prisma/client";

export type SafeListing = Omit<Listing, "createdAt" | "user"> & {
    createdAt: Date;
    user: SafeUser; // Include the user
};

export type SafeReservation = Omit<
    Reservation,
    "createdAt" | "startDate" | "endDate" | "listing"
> & {
    createdAt: Date;
    startDate: Date;
    endDate: Date;
    listing: SafeListing;
};

export type SafeUser = Omit<
    User,
    "createdAt" | "updatedAt" | "emailVerified"
> & {
    createdAt: Date;
    updatedAt: Date;
    emailVerified: Date | null;
};