import { doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";

export interface Informativos {
  horario: string;
  localidades: string;
  atendimento: string;
  ordem: number;
}

export async function getInformativos(): Promise<Informativos | null> {
  const docRef = doc(db, "abas", "primeiraAba");
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data() as Informativos;
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
    return null;
  }
}
