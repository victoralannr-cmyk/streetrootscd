import Image from "next/image";
import Link from "next/link";
import { Instagram, MessageCircle, Star, MapPin } from "lucide-react";
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
    theme: {
      card: "border-primary/50",
      button: "bg-primary text-primary-foreground hover:bg-primary/90",
      title: "text-primary",
    },
  },
  {
    name: "Carlos Davi",
    title: "Vibe Tropical Specialist",
    rating: 4.9,
    specialties: ["Tranças Nagô", "Dreadlocks", "Penteados Afro"],
    bio: "Com uma energia contagiante, Carlos é o especialista em tranças e dreadlocks. Sua vibe tropical se reflete em penteados cheios de estilo e personalidade, perfeitos para quem quer se destacar.",
    experience: "4+ anos de experiência",
    location: "Don Fragoso Q28 L05",
    image: PlaceHolderImages.find((p) => p.id === "carlos-profile"),
    whatsapp:
      "https://wa.me/5511999999992?text=Olá%20Carlos,%20gostaria%20de%20agendar%20um%20corte!",
    theme: {
      card: "border-accent/50",
      button: "bg-accent text-accent-foreground hover:bg-accent/90",
      title: "text-accent",
    },
  },
];

const galleryImages = PlaceHolderImages.filter((p) =>
  p.id.startsWith("gallery-")
).slice(0, 6);
const galleryCaptions = [
  "Corte Navalhado",
  "Freestyle Art",
  "Dreads Alinhados",
  "Desenho Personalizado",
  "Trança Nagô",
  "Degradê Perfeito",
];

const mapImage = PlaceHolderImages.find((p) => p.id === "map-placeholder");

export default function Home() {
  return (
    <div className="flex min-h-dvh flex-col">
      <AppHeader />
      <main className="flex-1">
        <section
          id="home"
          className="relative flex h-[calc(100vh-3.5rem)] w-full flex-col items-center justify-center text-center"
        >
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="container relative">
            <h1 className="font-headline text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl [text-shadow:0_4px_8px_rgba(0,0,0,0.4)]">
              A experiência certa muda sua vida.
            </h1>
            <p className="mx-auto mt-4 max-w-[700px] text-lg text-foreground/80 md:text-xl">
              Avelino & Davi: onde a navalha encontra a arte.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={barbers[0].whatsapp}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="font-bold text-lg px-8 py-6 bg-primary text-primary-foreground shadow-lg transition-transform duration-300 hover:scale-105 w-full sm:w-auto"
                >
                  Agendar com Diego
                </Button>
              </Link>
              <Link
                href={barbers[1].whatsapp}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="font-bold text-lg px-8 py-6 bg-accent text-accent-foreground shadow-lg transition-transform duration-300 hover:scale-105 w-full sm:w-auto"
                >
                  Agendar com Carlos
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section
          id="about"
          className="w-full py-12 md:py-24 lg:py-32 bg-background"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">
                  Nossos Artistas
                </h2>
                <p className="max-w-[900px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Dois mestres, um objetivo: elevar seu estilo ao próximo nível.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:max-w-none lg:grid-cols-2 mt-12">
              {barbers.map((barber) => (
                <Card
                  key={barber.name}
                  className={`bg-card flex flex-col transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${barber.theme.card}`}
                >
                  <CardHeader className="p-0">
                    <div className="relative">
                      {barber.image && (
                        <Image
                          src={barber.image.imageUrl}
                          alt={`Foto de ${barber.name}`}
                          width={400}
                          height={400}
                          className="w-full rounded-t-lg object-cover aspect-square"
                          data-ai-hint={barber.image.imageHint}
                        />
                      )}
                      <div className="absolute bottom-2 right-2 flex items-center gap-1 rounded-full bg-background/80 px-2 py-1 text-xs font-bold backdrop-blur-sm">
                        <Star className="h-4 w-4 fill-primary text-primary" />
                        <span>{barber.rating.toFixed(1)}</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="flex flex-col flex-1 p-6 space-y-4">
                    <div className="space-y-1">
                      <CardTitle className="text-2xl font-bold font-headline">
                        {barber.name}
                      </CardTitle>
                      <p
                        className={`font-semibold ${barber.theme.title}`}
                      >
                        {barber.title}
                      </p>
                    </div>
                    <p className="text-foreground/90 text-sm flex-1">
                      {barber.bio}
                    </p>
                    <div className="space-y-3">
                      <div>
                        <h4 className="text-sm font-semibold mb-2">
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
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1.5">
                          <Star className="h-4 w-4" />
                          <span>{barber.experience}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <MapPin className="h-4 w-4" />
                          <span>{barber.location}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="p-6">
                    <Button
                      asChild
                      className={`w-full font-bold text-lg py-6 ${barber.theme.button}`}
                    >
                      <Link
                        href={barber.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <MessageCircle className="h-5 w-5 mr-2" />
                        Agendar com {barber.name.split(" ")[0]}
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section
          id="gallery"
          className="w-full py-12 md:py-24 lg:py-32 bg-background/95"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-accent">
                  Nossa Arte
                </h2>
                <p className="max-w-[900px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Confira alguns dos nossos trabalhos. Cada corte conta uma
                  história.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6 mt-12">
              {galleryImages.map((image, index) => (
                <div
                  key={image.id}
                  className="group relative overflow-hidden rounded-lg shadow-lg aspect-[3/4] transition-transform duration-300 hover:scale-105"
                >
                  <Image
                    src={image.imageUrl}
                    alt={image.description}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                    data-ai-hint={image.imageHint}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-primary-foreground font-bold text-lg text-center font-headline">
                      {galleryCaptions[index]}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center justify-center gap-8 px-4 md:px-6">
            <div className="space-y-3 text-center">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight font-headline">
                Entre em Contato
              </h2>
              <p className="mx-auto max-w-[600px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Estamos na Rua da Barbearia, 123 - Centro. Venha nos visitar ou
                fale conosco online.
              </p>
            </div>
            <div className="mx-auto w-full max-w-4xl">
              {mapImage && (
                <div className="rounded-lg overflow-hidden border-2 border-border shadow-2xl">
                  <Image
                    src={mapImage.imageUrl}
                    alt={mapImage.description}
                    width={1200}
                    height={400}
                    className="w-full object-cover aspect-[3/1]"
                    data-ai-hint={mapImage.imageHint}
                  />
                </div>
              )}
            </div>
            <div className="flex justify-center flex-wrap gap-4 mt-4">
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold gap-2"
              >
                <Link
                  href="https://wa.me/5511999999990?text=Olá!%20Gostaria%20de%20mais%20informações."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle /> WhatsApp
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="font-bold gap-2 border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground"
              >
                <Link
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram /> Instagram
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <AppFooter />
    </div>
  );
}
