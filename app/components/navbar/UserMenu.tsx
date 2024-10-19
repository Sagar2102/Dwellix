'use client';

import React, { useCallback, useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import Avatar from '../Avatar';
import MenuItem from './MenuItem';
import useRegisterModal from '../../hooks/useRegisterModal';
import useLoginModal from '@/app/hooks/useLoginModal';
import { signOut, useSession } from 'next-auth/react';

const UserMenu: React.FC = () => {
    const { data: session } = useSession(); // Get session data
    const currentUser = session?.user; // Get current user from session
    console.log(currentUser);

    const registerModal = useRegisterModal();
    const loginModal = useLoginModal();
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = useCallback(() => {
        setIsOpen((value) => !value);
    }, []);

    return (
        <div className='relative'>
            <div className='flex flex-items items-center gap-3'>
                <div
                    onClick={() => {}}
                    className='hidden md:block text-sm font-semibold py-3 rounded-full hover-bg-neutral-100 transition cursor-pointer'>
                    Dwellix your home
                </div>
                <div
                    onClick={toggleOpen}
                    className='p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition'>
                    <AiOutlineMenu />
                    <div className='hidden md:block'>
                        <Avatar src={currentUser?.image} />
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className='absolute rounded-xl shadow-md w-[40vm] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm'>
                    <div className='flex flex-col cursor-pointer'>
                        {currentUser ? (
                            <>
                                <MenuItem onClick={() => {}} label="My trips" />
                                <MenuItem onClick={() => {}} label="My favorites" />
                                <MenuItem onClick={() => {}} label="My reservations" />
                                <MenuItem onClick={() => {}} label="My properties" />
                                <MenuItem onClick={() => {}} label="Dwellix my home" />
                                <hr />
                                <MenuItem onClick={() => signOut()} label="Logout" />
                            </>
                        ) : (
                            <>
                                <MenuItem onClick={loginModal.onOpen} label="Login" />
                                <MenuItem onClick={registerModal.onOpen} label="Sign up" />
                            </>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}

export default UserMenu;
