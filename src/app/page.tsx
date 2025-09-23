
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  Instagram,
  Star,
  MapPin,
  Clock,
  Briefcase,
  Users,
  Award,
  Phone,
  Scissors,
  Crown
} from "lucide-react";
import { AppHeader } from "@/components/header";
import { AppFooter } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { Separator } from "@/components/ui/separator";

const barbers = [
  {
    name: "Diego Avelino",
    title: "Street Style Specialist",
    rating: 5.0,
    specialties: [
      "Fades Modernos",
      "Street Style",
      "Cortes Urbanos",
      "Design Capilar",
    ],
    bio: "Diego Avelino vive o street style na pele. Mais que barbeiro, ele é referência quando o assunto é visual urbano. Cada corte é uma obra de arte que respeita sua personalidade e eleva sua confiança.",
    experience: "6+ anos de experiência",
    location: "Don Fragoso Q28 L05",
    image: PlaceHolderImages.find((p) => p.id === "diego-profile"),
    whatsapp:
      "https://wa.me/5511999999991?text=Olá%20Diego,%20gostaria%20de%20agendar%20um%20corte!",
    instagram: "@diego.avelino.barber",
    phone: "",
    hours: "Seg-Sex: 8h-19h | Sáb: 8h-17h",
    mapsUrl: "#",
  },
  {
    name: "Carlos Davi",
    title: "Cortes, Tranças & Dreadlocks",
    rating: 5.0,
    specialties: ["Dreadlocks", "Tranças", "Cortes Afro", "Manutenção"],
    bio: "Carlos Davi é mestre em tranças e dreadlocks. Um expert que respeita a cultura e eleva cada detalhe do seu estilo. Suas mãos criam arte capilar que conta sua história com autenticidade.",
    experience: "3+ anos de experiência",
    location: "R. Jose Regino 475 - Venâncios",
    image: PlaceHolderImages.find((p) => p.id === "carlos-profile"),
    whatsapp:
      "https://wa.me/558598424344?text=Olá%20Carlos,%20gostaria%20de%20agendar%20um%20corte!",
    instagram: "@carlos.davi.dreads",
    phone: "",
    hours: "Seg-Sex: 9h-19h | Sáb: 9h-16h",
    mapsUrl: "#",
  },
];

const galleryItems = [
  {
    id: "gallery-9",
    category: "Fade",
    title: "Manutenção",
    barber: "Diego Avelino",
  },
  {
    id: "gallery-10",
    category: "Design",
    title: "Fade",
    barber: "Carlos Davi",
  },
  {
    id: "gallery-5",
    category: "Street Style",
    title: "Riscos street",
    barber: "Diego Avelino",
  },
  {
    id: "gallery-8",
    category: "Tranças",
    title: "Trança Nagô",
    barber: "Carlos Davi",
  },
   {
    id: "gallery-6",
    category: "Manutenção",
    title: "Twist / Tranças",
    barber: "Carlos Davi",
  },
  {
    id: "gallery-7",
    category: "Design",
    title: "Manutenção",
    barber: "Diego Avelino",
  },
];

const filterCategories = [
  "Todos",
  "Street Style",
  "Dreadlocks",
  "Tranças",
  "Urban Cut",
  "Design",
  "Manutenção",
];

const pricing = {
  diego: [
    { service: "Corte (Social ou Degradê)", price: "R$ 30" },
    { service: "Barboterapia", price: "R$ 30" },
    { service: "Corte + Barba", price: "R$ 60" },
    { service: "Sobrancelha (Navalha ou Pinça)", price: "R$ 15" },
    { service: "Riscos e Desenhos", price: "a partir de R$ 10" },
  ],
  carlos: [
    { service: "Manutenção de Dreads", price: "R$ 100" },
    { service: "Trança Nagô", price: "a partir de R$ 80" },
    { service: "Twist / Tranças", price: "a partir de R$ 70" },
    { service: "Corte Afro", price: "R$ 50" },
    { service: "Corte Infantil", price: "R$ 35" },
  ]
};

const InfoCard = ({
  icon: Icon,
  text,
}: {
  icon: React.ElementType;
  text: string;
}) => (
  <div className="flex items-center gap-2">
    <Icon className="h-4 w-4 text-primary" />
    <span className="text-sm font-medium text-foreground/80">{text}</span>
  </div>
);

export default function Home() {
  const [activeFilter, setActiveFilter] = useState("Todos");

  const filteredGallery =
    activeFilter === "Todos"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);

  return (
    <div className="flex min-h-dvh flex-col bg-background">
      <AppHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section
          id="home"
          className="relative w-full py-20 md:py-32 lg:py-40 border-b border-primary/10 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://i.postimg.cc/pXkcMTWJ/2c7d18559ee68b186dbab62e9b03639b.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-black/80" />
          <div className="container relative px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-8">
              <div className="space-y-4">
                 <h1 className="font-headline text-4xl font-bold tracking-tighter text-primary sm:text-5xl md:text-6xl lg:text-7xl flex items-center justify-center gap-4">
                  STREET ROOTS <Crown className="w-10 h-10 md:w-16 md:h-16" />
                </h1>
                <p className="max-w-[700px] mx-auto text-foreground/80 md:text-xl">
                  Aqui não é só corte, é estilo de vida. Você sai diferente,
                  mais você mesmo. Diego e Carlos: dois mestres que vivem o que
                  fazem.
                </p>
              </div>

              <div className="w-full max-w-4xl mx-auto border-t border-border pt-8">
                <div className="grid grid-cols-2 sm:grid-cols-3 justify-items-center gap-y-6 gap-x-4 text-center">
                  <InfoCard icon={Clock} text="Seg - Sáb: 8h às 19h" />
                  <InfoCard icon={MapPin} text="Duas Localidades" />
                  <InfoCard icon={Briefcase} text="Atendimento a Domicílio" />
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium text-foreground/80">
                      +500 clientes satisfeitos
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="h-4 w-4 text-primary fill-primary" />
                    <span className="text-sm font-medium text-foreground/80">
                      4.9 avaliação
                    </span>
                  </div>
                   <div className="flex items-center gap-2">
                    <Scissors className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium text-foreground/80">
                      Cortes & Stylist
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4 min-[400px]:flex-row">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-8 py-6 shadow-lg shadow-primary/20 transition-transform duration-300 hover:scale-105">
                  <Link href={barbers[0].whatsapp} target="_blank">Agendar com Diego</Link>
                </Button>
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg px-8 py-6 shadow-lg shadow-accent/20 transition-transform duration-300 hover:scale-105">
                  <Link href={barbers[1].whatsapp} target="_blank">Agendar com Carlos</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section
          id="gallery"
          className="relative w-full py-12 md:py-24 lg:py-32 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://i.postimg.cc/sDtmrhFS/87d88046e835fd80d0d9be0a30ed79ca.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-black/70" />
          <div className="container relative px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary flex items-center gap-3">
                <Crown className="w-8 h-8" /> Nossos Trabalhos <Crown className="w-8 h-8" />
              </h2>
              <p className="max-w-[900px] text-foreground/80 md:text-xl/relaxed">
                Cada corte é uma transformação. Veja o antes e depois da
                confiança.
              </p>
            </div>

            <div className="flex justify-center flex-wrap gap-2 mb-8">
              {filterCategories.map((category) => (
                <Button
                  key={category}
                  variant={activeFilter === category ? "default" : "secondary"}
                  onClick={() => setActiveFilter(category)}
                  className={`font-semibold rounded-full px-4 py-2 text-sm transition-colors ${activeFilter === category ? 'bg-primary text-primary-foreground' : 'bg-secondary text-secondary-foreground'}`}
                >
                  {category}
                </Button>
              ))}
            </div>

            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {filteredGallery.map((item) => {
                  const image = PlaceHolderImages.find((p) => p.id === item.id);
                  return (
                    <CarouselItem key={item.id} className="basis-full md:basis-1/2 lg:basis-1/3">
                       <div className="group relative overflow-hidden rounded-lg bg-background aspect-square">
                        {image && (
                          <Image
                            src={image.imageUrl}
                            alt={item.title}
                            fill
                            className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                            data-ai-hint={image.imageHint}
                          />
                        )}
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                          <h3 className="text-white text-lg font-bold">{item.title}</h3>
                          <p className="text-white/80 text-sm">por {item.barber}</p>
                        </div>
                      </div>
                    </CarouselItem>
                  );
                })}
              </CarouselContent>
              <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 z-10 hidden sm:flex" />
              <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 z-10 hidden sm:flex" />
            </Carousel>
          </div>
        </section>
        
        {/* Pricing Section */}
        <section id="pricing" className="relative w-full py-12 md:py-24 lg:py-32 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://i.postimg.cc/NjncYbsD/569a3a1034dbe22073d4e73407320e4f.jpg')",
          }}>
           <div className="absolute inset-0 bg-black/70" />
          <div className="container relative px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary flex items-center gap-3">
                <Crown className="w-8 h-8" /> Tabela de Preços <Crown className="w-8 h-8" />
              </h2>
              <p className="max-w-[900px] text-foreground/80 md:text-xl/relaxed">
                Serviços de qualidade com preços justos. Escolha seu mestre e agende seu horário.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-1 md:gap-12 lg:max-w-none lg:grid-cols-2">
              <Card className="bg-card/80 backdrop-blur-sm border-border hover:border-primary/50 transition-colors">
                <CardHeader>
                  <CardTitle className="text-2xl font-headline text-center">{barbers[0].name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableBody>
                      {pricing.diego.map((item) => (
                        <TableRow key={item.service}>
                          <TableCell className="font-medium">{item.service}</TableCell>
                          <TableCell className="text-right">{item.price}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
                 <CardFooter className="p-6 mt-auto">
                    <Button asChild className="w-full font-bold text-lg py-6 bg-primary text-primary-foreground shadow-lg hover:bg-primary/90 transition-transform duration-300 hover:scale-105">
                      <Link href={barbers[0].whatsapp} target="_blank">
                        Agendar com {barbers[0].name.split(" ")[0]}
                      </Link>
                    </Button>
                  </CardFooter>
              </Card>
              <Card className="bg-card/80 backdrop-blur-sm border-border hover:border-accent/50 transition-colors">
                <CardHeader>
                  <CardTitle className="text-2xl font-headline text-center">{barbers[1].name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableBody>
                      {pricing.carlos.map((item) => (
                        <TableRow key={item.service}>
                          <TableCell className="font-medium">{item.service}</TableCell>
                          <TableCell className="text-right">{item.price}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
                 <CardFooter className="p-6 mt-auto">
                    <Button asChild className="w-full font-bold text-lg py-6 bg-accent text-accent-foreground shadow-lg hover:bg-accent/90 transition-transform duration-300 hover:scale-105">
                      <Link href={barbers[1].whatsapp} target="_blank">
                        Agendar com {barbers[1].name.split(" ")[0]}
                      </Link>
                    </Button>
                  </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* Barbers Section */}
        <section
          id="about"
          className="w-full py-12 md:py-24 lg:py-32 bg-card/50"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary flex items-center gap-3">
                  <Crown className="w-8 h-8" /> Nossos Mestres <Crown className="w-8 h-8" />
                </h2>
                <p className="max-w-[900px] text-foreground/80 md:text-xl/relaxed">
                  Dois experts, duas especialidades. Mesmo padrão: excelência de
                  verdade.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-1 md:gap-12 lg:max-w-none lg:grid-cols-2">
              {barbers.map((barber) => (
                <Card
                  key={barber.name}
                  className="bg-card flex flex-col transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border-border hover:border-primary/50"
                >
                  <CardHeader className="p-0">
                    <div className="relative">
                      {barber.image && (
                        <Image
                          src={barber.image.imageUrl}
                          alt={`Foto de ${barber.name}`}
                          width={600}
                          height={600}
                          className="w-full rounded-t-lg object-cover aspect-square"
                          data-ai-hint={barber.image.imageHint}
                        />
                      )}
                      <div className="absolute top-4 right-4 flex items-center gap-1 rounded-full bg-background/80 px-3 py-1.5 text-sm font-bold backdrop-blur-sm border border-primary/50">
                        <Star className="h-4 w-4 fill-primary text-primary" />
                        <span>{barber.rating.toFixed(1)}</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="flex flex-col flex-1 p-6 space-y-4">
                    <div className="space-y-1">
                      <CardTitle className="text-3xl font-bold font-headline">
                        {barber.name}
                      </CardTitle>
                      <p className="font-semibold text-primary">
                        {barber.title}
                      </p>
                    </div>
                    <p className="text-foreground/90 text-sm flex-1">
                      {barber.bio}
                    </p>
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-semibold mb-2 text-foreground/80">
                          Especialidades:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {barber.specialties.map((spec) => (
                            <Badge key={spec} variant="secondary">
                              {spec}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1.5">
                          <Award className="h-4 w-4" />
                          <span>{barber.experience}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <MapPin className="h-4 w-4" />
                          <span>{barber.location}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="p-6 mt-auto">
                    <Button asChild className="w-full font-bold text-lg py-6 bg-primary text-primary-foreground shadow-lg hover:bg-primary/90 transition-transform duration-300 hover:scale-105">
                      <Link href={barber.whatsapp} target="_blank">
                        Agendar com {barber.name.split(" ")[0]}
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
             <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary flex items-center gap-3">
               <Crown className="w-8 h-8" />  Quer transformar seu visual? <Crown className="w-8 h-8" />
              </h2>
              <p className="max-w-[900px] text-foreground/80 md:text-xl/relaxed">
                Chama no Whats! Duas localidades, mesmo padrão de excelência.
              </p>
            </div>
            <div className="grid gap-10 md:grid-cols-2">
              {barbers.map((barber) => (
                <div
                  key={barber.name}
                  className="bg-card border border-border rounded-2xl p-6 flex flex-col gap-4"
                >
                  <div className="text-center">
                    <h3 className="text-3xl font-bold font-headline text-primary">
                      {barber.name}
                    </h3>
                    <p className="font-semibold text-accent">
                      {barber.title}
                    </p>
                  </div>
                  <div className="space-y-3 text-lg mt-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-6 w-6 text-primary mt-1" />
                      <div>
                        <p className="font-semibold text-sm text-foreground/80">Endereço</p>
                        <span>{barber.location}</span>
                      </div>
                    </div>
                    {barber.phone && (
                      <div className="flex items-start gap-3">
                        <Phone className="h-6 w-6 text-primary mt-1" />
                        <div>
                          <p className="font-semibold text-sm text-foreground/80">Telefone</p>
                          <span>{barber.phone}</span>
                        </div>
                      </div>
                    )}
                    <div className="flex items-start gap-3">
                      <Clock className="h-6 w-6 text-primary mt-1" />
                      <div>
                        <p className="font-semibold text-sm text-foreground/80">Horário</p>
                        <span>{barber.hours}</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Instagram className="h-6 w-6 text-primary mt-1" />
                       <div>
                        <p className="font-semibold text-sm text-foreground/80">Instagram</p>
                        <span>{barber.instagram}</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-auto grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
                    <Button asChild className="w-full font-bold text-lg py-6 bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-[0_0_15px_rgba(210,26,11,0.4)] transition-all duration-300 hover:shadow-[0_0_25px_rgba(76,175,80,0.6)] hover:scale-105">
                      <Link href={barber.whatsapp} target="_blank">
                        Falar com {barber.name.split(" ")[0]}
                      </Link>
                    </Button>
                    <Button asChild variant="outline" className="w-full font-bold text-lg py-6 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105">
                      <Link href={barber.mapsUrl} target="_blank">
                        Ver no Maps
                      </Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
      <AppFooter barbers={barbers} />
    </div>
  );
}
