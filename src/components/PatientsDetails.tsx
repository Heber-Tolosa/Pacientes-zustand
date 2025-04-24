import { Patient } from "../types";
import PatientDetailItem from "./PatientDetailItem";
import { usePatientStore } from "../store/store";
import { toast } from "react-toastify";

type PatientDetailProps = {
  patient: Patient;
};
export default function PatientsDetails({ patient }: PatientDetailProps) {
  const deletePatient = usePatientStore((state) => state.deletePatient);
  const getPatientById = usePatientStore((state) => state.getPatientById);
  const handleClick = () => {
    deletePatient(patient.id);
    toast("Paciente eliminado", { type: "error" });
  };
  return (
    <div className="mx-5 my-10  px-5 py-10 bg-white shadow-md rounded-xl">
      <PatientDetailItem label="ID" data={patient.id} />
      <PatientDetailItem label="Nombre" data={patient.name} />
      <PatientDetailItem label="Propietario" data={patient.caretaker} />
      <PatientDetailItem label="Email" data={patient.email} />
      <PatientDetailItem label="Fecha alta" data={patient.date.toString()} />
      <PatientDetailItem label="Sintomas" data={patient.symptoms} />
      <div className="flex flex-col lg:flex-row gap-3 justify-between mt-10">
        <button
          onClick={() => getPatientById(patient.id)}
          type="button"
          className="py-2 px-10 bg-indigo-600  hover:bg-indigo-700 font-bold text-white uppercase rounded-lg"
        >
          Editar
        </button>
        <button
          onClick={handleClick}
          type="button"
          className="py-2 px-10 bg-red-600  hover:bg-red-700 font-bold text-white uppercase rounded-lg"
        >
          Eliminar
        </button>
      </div>
    </div>
  );
}
