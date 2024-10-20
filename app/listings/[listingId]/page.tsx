// ListingPage.tsx

import getCurrentUser from '@/app/actions/getCurrentUser';
import getListingById from '@/app/actions/getListingById';
import getReservations from '@/app/actions/getReservations';
import ClientOnly from '@/app/components/ClientOnly';
import EmptyState from '@/app/components/EmptyState';
import React from 'react';
import ListingClient from './ListingClient';
import { SafeListing, SafeReservation } from '@/app/types';

export const metadata = {
    title: 'Dwellix | Listings',
};

interface IParams {
    listingId?: string;
}

const ListingPage = async ({ params }: { params: IParams }) => {
    // Fetch the listing data
    const listingData = await getListingById(params);
    const reservations: SafeReservation[] = await getReservations(params); // Make sure to type this correctly
    const currentUser = await getCurrentUser();

    // Check if listing exists
    if (!listingData) {
        return (
            <ClientOnly>
                <EmptyState />
            </ClientOnly>
        );
    }

    // listingData should be of type SafeListing
    const listing: SafeListing = listingData; 

    return (
        <ClientOnly>
            <ListingClient
                listing={listing} // Use the SafeListing directly
                reservations={reservations}
                currentUser={currentUser}
            />
        </ClientOnly>
    );
};

export default ListingPage;
