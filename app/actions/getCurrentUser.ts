import { getServerSession } from "next-auth/next";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import prisma from "@/app/libs/prismadb";

export async function getSession() {
    return await getServerSession(authOptions);
}

export default async function getCurrentUser() {
    try {
        const session = await getSession();

        if (!session?.user?.email) {
            return null;
        }

        const currentUser = await prisma.user.findUnique({
            where: {
                email: session.user.email as string,
            }
        });

        if (!currentUser) {
            return null;
        }

        // Return Date objects instead of ISO strings
        return {
            ...currentUser,
            createdAt: new Date(currentUser.createdAt),
            updatedAt: new Date(currentUser.updatedAt),
            emailVerified: currentUser.emailVerified ? new Date(currentUser.emailVerified) : null,
        };
    } catch (error: any) {
        return null;
    }
}
