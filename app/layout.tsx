import type { Metadata } from "next";
import { Provider } from "@/components/ui/provider";
import Nav from "./components/Nav";

export const metadata: Metadata = {
	title: "Favorite Cities",
	description: "Author Ciprian Neamtu",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body>
				<Provider>
					<Nav />
					{children}
				</Provider>
			</body>
		</html>
	);
}
