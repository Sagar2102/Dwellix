import ClientOnly from "./components/ClientOnly";
import Container from "./components/Container";
import EmptyState from "./components/EmptyState";
import getListings, { IListingsParams } from "./actions/getListings";
import getCurrentUser from "./actions/getCurrentUser";
import ListingCard from "./components/listings/ListingCard";
import { SafeListing } from "./types"; // Make sure to import your types

interface HomeProps{
  searchParams:IListingsParams
}

const Home=async({searchParams}:HomeProps)=> {
    const listings = await getListings(searchParams); // Should return listings with user included
    const currentUser = await getCurrentUser();

    // Convert date strings to Date objects and include user details
    const convertedListings: SafeListing[] = listings.map(listing => ({
        ...listing,
        createdAt: new Date(listing.createdAt), // Convert createdAt to Date
        user: {
            ...listing.user,
            createdAt: new Date(listing.user.createdAt),
            updatedAt: new Date(listing.user.updatedAt),
            emailVerified: listing.user.emailVerified ? new Date(listing.user.emailVerified) : null,
        },
    }));

    if (convertedListings.length === 0) {
        return (
            <ClientOnly>
                <EmptyState showReset />
            </ClientOnly>
        );
    }

    return (
        <ClientOnly>
            <Container>
                <div className='pt-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8'>
                    {convertedListings.map((listing) => (
                        <ListingCard
                            currentUser={currentUser}
                            key={listing.id}
                            data={listing} // Ensure this is a SafeListing
                        />
                    ))}
                </div>
            </Container>
        </ClientOnly>
    );
}

export default Home;