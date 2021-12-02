import React from "react";
import "./style.css";
import MedicalTreatmentList from './MedicalTreatmentList';

export default function App() {

  const medicalTreatmentListAsJson =
  '[ {"treatId": "101", "treatCourseId":"12345", "type": "long term", "category": "Heart Patient", "name": "Malika Arora", "startDate": "01-10-2020"} ,' +
    '{"treatId": "102", "treatCourseId":"12346", "type": "short term", "category": "Bone Injury", "name": "Bola Singh", "startDate": "25-10-2020"} ,' +
    '{"treatId": "103", "treatCourseId":"12347", "type": "long term", "category": "Cancer", "name": "Candice Palmer", "startDate": "19-10-2021"} ,' +
    '{"treatId": "104", "treatCourseId":"12348", "type": "long term", "category": "Diabetes", "name": "Anthony Joseph", "startDate": "19-08-2019"} ,' +
    '{"treatId": "105", "treatCourseId":"12349", "type": "short term", "category": "High Temperature", "name": "Amir Raheem", "startDate": "09-11-2021"}]';

return (
    <div>
        <MedicalTreatmentList json={medicalTreatmentListAsJson} />
    </div>
  );
}