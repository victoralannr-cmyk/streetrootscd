import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Instagram } from "lucide-react";

const logoUrl =
  "https://i.postimg.cc/T1pnh9v9/550494427-24780280111639226-1572840491972429960-n-removebg-preview.png";

type Barbers = {
    name: string;
    title: string;
    location: string;
    phone: string;
    instagram: string;
}[];

export function AppFooter({ barbers }: { barbers: Barbers }) {
  return (
    <footer className="w-full border-t bg-card/50 pt-12 pb-8">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="space-y-4">
             <Link href="/" className="flex items-center space-x-2">
                <Image
                  src={logoUrl}
                  alt="Street Roots Logo"
                  width={180}
                  height={70}
                  className="object-contain"
                />
              </Link>
            <p className="max-w-xs text-foreground/70">
              Dois mestres, um padrão: excelência de verdade.
            </p>
          </div>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 col-span-1 lg:col-span-2">
            {barbers.map((barber) => (
              <div key={barber.name} className="space-y-4">
                <h3 className="font-headline text-xl font-bold text-primary">{barber.name}</h3>
                <p className="text-sm font-semibold text-accent -mt-2">{barber.title}</p>
                <div className="space-y-2 text-foreground/80 text-sm">
                   <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span>{barber.location}</span>
                    </div>
                     <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-primary" />
                      <span>{barber.phone}</span>
                    </div>
                     <div className="flex items-center gap-2">
                      <Instagram className="h-4 w-4 text-primary" />
                      <span>{barber.instagram}</span>
                    </div>
                </div>
              </div>
            ))}
           </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-xs text-foreground/50">
          <p>
            &copy; {new Date().getFullYear()} Street Roots. Dois mestres, um padrão: excelência de verdade.
          </p>
        </div>
      </div>
    </footer>
  );
}
