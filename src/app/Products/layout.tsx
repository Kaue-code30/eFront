"use client"
import Header from "../Components/Header"

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <Header>
            </Header>
            {children}
        </>

    )
}