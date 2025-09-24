import { Injectable } from "@nestjs/common";
import { HttpService } from "@nestjs/axios";
import { Tool } from "@rekog/mcp-nest";
import { z } from "zod";
import { map } from "rxjs/operators";
import { firstValueFrom } from "rxjs";

// Interface précise pour un enregistrement de RappelConso
export interface RappelConsoRecord {
  gtin: number;
  numero_fiche: string;
  numero_version: number;
  nature_juridique_rappel: string;
  categorie_produit: string;
  sous_categorie_produit: string;
  marque_produit: string;
  modeles_ou_references: string;
  identification_produits: string;
  conditionnements: string;
  date_debut_commercialisation: string; // Date
  date_date_fin_commercialisation: string; // Date
  temperature_conservation: string;
  marque_salubrite: string;
  informations_complementaires: string | null;
  zone_geographique_de_vente: string;
  distributeurs: string;
  motif_rappel: string;
  risques_encourus: string;
  preconisations_sanitaires: string;
  description_complementaire_risque: string | null;
  conduites_a_tenir_par_le_consommateur: string;
  numero_contact: string | null;
  modalites_de_compensation: string;
  date_de_fin_de_la_procedure_de_rappel: string; // Date
  informations_complementaires_publiques: string | null;
  liens_vers_les_images: string;
  lien_vers_la_liste_des_produits: string | null;
  lien_vers_la_liste_des_distributeurs: string;
  lien_vers_affichette_pdf: string;
  lien_vers_la_fiche_rappel: string;
  rappel_guid: string;
  date_publication: string; // DateTime
  libelle: string;
  id: number;
}

// Interface pour la réponse globale de l'API
export interface RappelConsoResponse {
  total_count: number;
  results: RappelConsoRecord[];
}

@Injectable()
export class RappelConsoTool {
  private readonly baseUrl =
    "https://data.economie.gouv.fr/api/explore/v2.1/catalog/datasets/rappelconso-v2-gtin-trie/records";

  constructor(private readonly httpService: HttpService) {}

  @Tool({
    name: "rappel-conso-tool",
    description:
      "Récupère les derniers rappels de produits depuis l'API RappelConso de data.gouv.fr",
    parameters: z.object({
      limit: z
        .number()
        .optional()
        .default(10)
        .describe("Nombre de résultats à retourner"),
      query: z
        .string()
        .optional()
        .describe(
          "Filtre de recherche. Exemple: \"nom_du_produit like 'jambon'\"",
        ),
    }),
  })
  async getRappelConso({ limit, query }): Promise<RappelConsoResponse> {
    const params: Record<string, any> = {
      limit,
      order_by: "date_publication desc",
    };

    if (query) {
      params.where = query;
    }

    const observable = this.httpService
      .get<RappelConsoResponse>(this.baseUrl, { params })
      .pipe(map((response) => response.data));

    return firstValueFrom(observable);
  }
}
