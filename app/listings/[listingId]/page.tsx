import getCurrentUser from '@/app/actions/getCurrentUser';
import getListingById from '@/app/actions/getListingById';
import ClientOnly from '@/app/components/ClientOnly';
import EmptyState from '@/app/components/EmptyState';
import React from 'react';
import ListingClient from './ListingClient';
import { SafeListing } from '@/app/types'; // Adjust import based on your structure

export const metadata = {
    title: 'Airbnb | Listings',
};

interface IParams {
    listingId?: string;
}

const ListingPage = async ({ params }: { params: IParams }) => {
    // Fetch the listing data
    const listingData = await getListingById(params);
    const currentUser = await getCurrentUser();

    // Check if listing exists
    if (!listingData) {
        return (
            <ClientOnly>
                <EmptyState />
            </ClientOnly>
        );
    }

    // Convert date strings to Date objects
    const listing: SafeListing = {
        ...listingData,
        createdAt: new Date(listingData.createdAt), // Convert createdAt to Date
        user: {
            ...listingData.user,
            createdAt: new Date(listingData.user.createdAt), // Convert user's createdAt
            updatedAt: new Date(listingData.user.updatedAt), // Convert user's updatedAt
            // If there are other date fields, convert them similarly
            emailVerified: listingData.user.emailVerified ? new Date(listingData.user.emailVerified) : null,
        },
        // Add any other properties from listingData that are needed
    };

    return (
        <ClientOnly>
            <ListingClient
                listing={listing} // Use the converted listing here
                currentUser={currentUser}
            />
        </ClientOnly>
    );
};

export default ListingPage;
