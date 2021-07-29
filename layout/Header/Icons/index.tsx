
import React from 'react';
import Link from 'next/link';
import Cart from 'assets/icons/Cart';
import User from 'assets/icons/User';
import { useRouter } from 'next/router';
import { Dropdown, DropdownContainer, IconsWrapper } from './styles';

interface IconsProps {
}

const Icons: React.FunctionComponent<IconsProps> = () => {
  const router = useRouter();

  function handleClick() {
		router.push('/sign-in')
	}

  return (
    <IconsWrapper>
			<Link href="/cart">
				<a>
					<Cart
						styles={{
							size: 30,
							color: 'black',
							strokeWidth: 40,
						}}
					/>
				</a>
			</Link>

			<Link href="/sign-in">
				<a>
					<User
						styles={{
							size: 30,
							color: 'black',
							strokeWidth: 40,
						}}
					/>
				</a>
			</Link>

			<Dropdown>
				<DropdownContainer>
					<span>
						<Link href="/account">
							<a>Moje konto</a>
						</Link>
					</span>
					<span>
						<Link href="/account-orders">
							<a>Zamówienia</a>
						</Link>
					</span>
					<span>
						<Link href="/account-settings">
							<a>Ustawienia</a>
						</Link>
					</span>
					<span onClick={() => handleClick()}>
						<a>Wyloguj się</a>
					</span>
				</DropdownContainer>
			</Dropdown>
		</IconsWrapper>
  );
};

export default Icons;