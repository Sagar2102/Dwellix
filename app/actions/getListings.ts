import prisma from "@/app/libs/prismadb";
import { SafeListing } from "@/app/types"; // Adjust the import path as needed

export interface IListingsParams {
    userId?: string;
    guestCount?: number;
    roomCount?: number;
    bathroomCount?: number;
    startDate?: string;
    endDate?: string;
    locationValue?: string;
    category?: string;
}

export default async function getListings(
    params: IListingsParams
) {
    try {
        const {
            userId,
            roomCount,
            guestCount,
            bathroomCount,
            locationValue,
            startDate,
            endDate,
            category,
        }=params;
        let query: any={};
        if(userId)
        {
            query.userId=userId;
        }

        if (category) {
            query.category = category;
        }

        if (roomCount) {
            query.roomCount = {
                gte: +roomCount
            }
        }

        if (guestCount) {
            query.guestCount = {
                gte: +guestCount
            }
        }

        if (bathroomCount) {
            query.bathroomCount = {
                gte: +bathroomCount
            }
        }

        if (locationValue) {
            query.locationValue = locationValue;
        }

        if (startDate && endDate) {
            query.NOT = {
                reservations: {
                    some: {
                        OR: [
                            {
                                endDate: { gte: startDate },
                                startDate: { lte: startDate }
                            },
                            {
                                startDate: { lte: endDate },
                                endDate: { gte: endDate }
                            }
                        ]
                    }
                }
            }
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
