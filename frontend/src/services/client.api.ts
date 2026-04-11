import { authFetch } from "@/lib/api";
import { ApiResponse, ClientProfile } from "@/types/app.types";

export async function getClientProfile(): Promise<ApiResponse<ClientProfile>> {
    return authFetch<ClientProfile>(`${process.env.NEXT_PUBLIC_API_URL}/client/profile`);
}