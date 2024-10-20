// actions/getListingById.ts

import prisma from '@/app/libs/prismadb';
import { SafeListing } from '@/app/types'; // Import your types

interface IParams {
    listingId?: string;
}

export default async function getListingById(params: IParams): Promise<SafeListing | null> {
    try {
        const { listingId } = params;

        const listing = await prisma.listing.findUnique({
            where: {
                id: listingId,
            },
            include: {
                user: true, // Include the user relation
            },
        });

        if (!listing) {
            return null; // Return null if listing not found
        }

        return {
            ...listing,
            createdAt: new Date(listing.createdAt), // Convert to Date object
            user: {
                ...listing.user,
                createdAt: new Date(listing.user.createdAt), // Convert user's createdAt to Date
                updatedAt: new Date(listing.user.updatedAt), // Convert user's updatedAt to Date
                emailVerified: listing.user.emailVerified ? new Date(listing.user.emailVerified) : null,
            },
        };

    } catch (error: any) {
        throw new Error(error);
    }
}
