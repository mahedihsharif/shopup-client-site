import axios from "axios";

const BASE_URL = "http://localhost:6500/api/";

const TOKEN=" eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNmZmNWE2NWMzNWExOGU5M2E2NzAyYSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNDczMDM4NiwiZXhwIjoxNjM2ODkwMzg2fQ.mfojCji4DOBOCxQpdUiODyOc6H3evdnpzS8RNpxm6II"

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});

