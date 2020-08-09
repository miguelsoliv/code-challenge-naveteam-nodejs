export default interface IUpdateNaverDTO {
  naver_id: number;
  user_id: number;
  name: string;
  birthdate: Date;
  admission_date: Date;
  job_role: string;
  projects: number[];
}
