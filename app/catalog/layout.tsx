import Link from "next/link";

export default function CatalogLayout({children}: {children: React.ReactNode}){

    const categories = ['all', 'action-movie', 'comedy', 'drama', 'fantasy'];


    return (
        <div className="flex gap-6">
            <aside className="w-48 shrink-0 flex flex-col gap-2" >
                {categories.map(category=> (
                    <Link key={category} href={"/catalog"}>{category}</Link>
                ))}
            </aside>

            <main className="flex-1 ">
                {children}
            </main>
        </div>
    )
}