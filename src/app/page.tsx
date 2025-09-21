
import Image from "next/image";
import Link from "next/link";
import {
  Instagram,
  MessageCircle,
  Star,
  MapPin,
  Scissors,
  Sparkles,
  Award,
  Phone,
  Clock,
  Map,
  Briefcase,
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

const services = [
  {
    icon: Scissors,
    name: "Corte Social",
    description: "Alinhamento, estilo e elegância.",
    price: "R$ 40",
  },
  {
    icon: Sparkles,
    name: "Corte + Barba",
    description: "Visual completo com acabamento impecável.",
    price: "R$ 65",
  },
  {
    icon: Award,
    name: "Corte + Sobrancelha",
    description: "Realce seu olhar com um design profissional.",
    price: "R$ 55",
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
const heroImage = PlaceHolderImages.find((p) => p.id === "diego-profile");

const newBarbers = [
  {
    name: "Diego Avelino",
    subtitle: "Street Style Specialist",
    address: "Rua da Barbearia, 123 - Centro",
    phone: "(11) 98765-4321",
    hours: "Seg à Sáb, 9h - 20h",
    instagram: "@diego.streetroots",
    mapsUrl: "#",
    whatsappUrl: "https://wa.me/5511987654321",
  },
  {
    name: "Carlos Davi",
    subtitle: "Cortes, Tranças & Dreadlocks",
    address: "Rua da Barbearia, 123 - Centro",
    phone: "(11) 91234-5678",
    hours: "Seg à Sáb, 9h - 20h",
    instagram: "@carlos.streetroots",
    mapsUrl: "#",
    whatsappUrl: "https://wa.me/5511912345678",
  },
];

const InfoCard = ({
  icon: Icon,
  text,
}: {
  icon: React.ElementType;
  text: string;
}) => (
  <div className="flex items-center gap-2">
    <Icon className="h-5 w-5 text-primary" />
    <span className="font-medium text-foreground/80">{text}</span>
  </div>
);

export default async function Home() {
  const informativos = {
    horario: "Seg - Sáb: 8h às 19h",
    localidades: "Duas Localidades",
    atendimento: "Atendimento a Domicílio",
  };

  return (
    <div className="flex min-h-dvh flex-col">
      <AppHeader />
      <main className="flex-1">
        <section
          id="home"
          className="w-full py-12 md:py-24 lg:py-32 bg-background"
        >
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-1">
              <div className="flex flex-col justify-center items-center text-center space-y-4">
                <div className="space-y-2">
                  <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Onde o estilo de rua encontra a navalha.
                  </h1>
                  <p className="max-w-[600px] text-foreground/80 md:text-xl">
                    Aqui não é só corte, é estilo de vida. Você sai diferente, mais você mesmo. Diego e Carlos: dois mestres que vivem o que fazem.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href={barbers[0].whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      size="lg"
                      className="font-bold text-lg px-8 py-6 bg-primary text-primary-foreground shadow-lg transition-transform duration-300 hover:scale-105 w-full sm:w-auto"
                    >
                      Agendar Agora
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-8 bg-background border-y">
          <div className="container px-4 md:px-6">
            <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 text-center">
              <InfoCard icon={Clock} text={informativos.horario} />
              <InfoCard icon={Map} text={informativos.localidades} />
              <InfoCard icon={Briefcase} text={informativos.atendimento} />
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
                  Conheça Nossos Artistas
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
                  Nossa Galeria
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
        
        <section
          id="services"
          className="w-full py-12 md:py-24 lg:py-32 bg-background/95"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">
                  Nossos Serviços
                </h2>
                <p className="max-w-[900px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Oferecemos uma variedade de serviços para realçar o seu
                  estilo.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:max-w-none lg:grid-cols-3 mt-12">
              {services.map((service) => (
                <Card
                  key={service.name}
                  className="bg-card flex flex-col items-center justify-center p-6 text-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
                >
                  <CardHeader>
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <service.icon className="h-8 w-8" />
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <CardTitle>{service.name}</CardTitle>
                    <p className="text-muted-foreground">
                      {service.description}
                    </p>
                  </CardContent>
                  <CardFooter>
                    <p className="text-lg font-bold">{service.price}</p>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center justify-center gap-8 px-4 md:px-6">
            <div className="space-y-3 text-center">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight font-headline">
                Aqui não é só corte, é estilo de vida.
              </h2>
              <p className="mx-auto max-w-[600px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Você sai diferente, mais você mesmo. Diego e Carlos: dois mestres que vivem o que fazem. Venham conchecer nosso trabalho e chama no Wats.
              </p>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-900 text-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 md:grid-cols-2">
              {newBarbers.map((barber) => (
                <div
                  key={barber.name}
                  className="bg-gray-800/50 border border-yellow-400/20 rounded-2xl p-6 flex flex-col gap-4"
                >
                  <div className="text-center">
                    <h3 className="text-3xl font-bold font-headline text-yellow-400">
                      {barber.name}
                    </h3>
                    <p className="font-semibold text-green-400">
                      {barber.subtitle}
                    </p>
                  </div>
                  <div className="space-y-3 text-lg">
                    <div className="flex items-center gap-3">
                      <MapPin className="h-6 w-6 text-yellow-400" />
                      <span>{barber.address}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="h-6 w-6 text-yellow-400" />
                      <span>{barber.phone}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="h-6 w-6 text-yellow-400" />
                      <span>{barber.hours}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Instagram className="h-6 w-6 text-yellow-400" />
                      <span>{barber.instagram}</span>
                    </div>
                  </div>
                  <div className="mt-auto grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                    <Button
                      asChild
                      className="w-full font-bold text-lg py-6 bg-gradient-to-r from-yellow-400 to-green-500 text-black shadow-[0_0_15px_rgba(163,230,53,0.5)] transition-all duration-300 hover:shadow-[0_0_25px_rgba(163,230,53,0.8)] hover:scale-105"
                    >
                      <Link href={barber.whatsappUrl} target="_blank">
                        Falar com {barber.name.split(" ")[0]}
                      </Link>
                    </Button>
                    <Button
                      asChild
                      className="w-full font-bold text-lg py-6 bg-gradient-to-r from-yellow-400 to-green-500 text-black shadow-[0_0_15px_rgba(250,204,21,0.5)] transition-all duration-300 hover:shadow-[0_0_25px_rgba(250,204,21,0.8)] hover:scale-105"
                    >
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
      <AppFooter />
    </div>
  );
}
