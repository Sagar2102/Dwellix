// actions/getReservations.ts

import prisma from '@/app/libs/prismadb';
import { SafeReservation, SafeListing, SafeUser } from '@/app/types'; // Ensure SafeUser and SafeListing are imported

interface IParams {
    listingId?: string;
    userId?: string; // If needed
    authorId?: string;
}

export default async function getReservations(params: IParams): Promise<SafeReservation[]> {
    try {
        const { listingId } = params;

        const reservations = await prisma.reservation.findMany({
            where: {
                listingId: listingId,
            },
            include: {
                listing: {
                    include: {
                        user: true, // Include the user data in the listing
                    },
                },
                user: true, // If you also need the user for the reservation
            },
        });

        const safeReservations: SafeReservation[] = reservations.map((reservation) => ({
            ...reservation,
            createdAt: new Date(reservation.createdAt), // Convert createdAt to Date
            startDate: new Date(reservation.startDate), // Convert startDate to Date
            endDate: new Date(reservation.endDate), // Convert endDate to Date
            listing: {
                ...reservation.listing,
                createdAt: new Date(reservation.listing.createdAt), // Convert listing's createdAt to Date
                user: {
                    ...reservation.listing.user,
                    createdAt: new Date(reservation.listing.user.createdAt), // Convert user's createdAt to Date
                    updatedAt: new Date(reservation.listing.user.updatedAt), // Convert user's updatedAt to Date
                    emailVerified: reservation.listing.user.emailVerified ? new Date(reservation.listing.user.emailVerified) : null,
                },
            },
            user: { // Include user information from reservation if needed
                ...reservation.user,
                createdAt: new Date(reservation.user.createdAt), // Convert user's createdAt to Date
                updatedAt: new Date(reservation.user.updatedAt), // Convert user's updatedAt to Date
                emailVerified: reservation.user.emailVerified ? new Date(reservation.user.emailVerified) : null,
            },
        }));

        return safeReservations;
    } catch (error: any) {
        throw new Error(error);
    }
}
