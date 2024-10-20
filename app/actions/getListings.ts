import prisma from "@/app/libs/prismadb";
import { SafeListing } from "@/app/types"; // Adjust the import path as needed

export interface IListingsParams {
    userId?: string;
    // guestCount?: number;
    // roomCount?: number;
    // bathroomCount?: number;
    // startDate?: string;
    // endDate?: string;
    // locationValue?: string;
    // category?: string;
}

export default async function getListings(
    params: IListingsParams
) {
    try {
        const {userId}=params;
        let query: any={};
        if(userId)
        {
            query.userId=userId;
        }
        const listings = await prisma.listing.findMany({
            where:query,
            include: {
                user: true, // Include the user data
            },
            orderBy: {
                createdAt: 'desc'
            }
        });

        // Convert the listings to SafeListing format
        const safeListings: SafeListing[] = listings.map((listing) => ({
            ...listing,
            createdAt: new Date(listing.createdAt), // Convert createdAt to Date object
            user: {
                ...listing.user,
                createdAt: new Date(listing.user.createdAt), // Convert user createdAt to Date
                updatedAt: new Date(listing.user.updatedAt), // Convert user updatedAt to Date
                emailVerified: listing.user.emailVerified ? new Date(listing.user.emailVerified) : null, // Convert emailVerified to Date if it exists
            },
        }));

        return safeListings;
    } catch (error: any) {
        throw new Error(error);
    }
}
