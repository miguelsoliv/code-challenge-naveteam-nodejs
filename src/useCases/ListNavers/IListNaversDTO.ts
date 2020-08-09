export default interface IListNaversDTO {
  user_id: number;
  query: {
    name?: string;
    admission_date?: Date;
    job_role?: string;
  };
}
