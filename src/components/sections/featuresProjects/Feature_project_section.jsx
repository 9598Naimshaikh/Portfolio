import Project_Card from "./Project_Card";

export default function Feature_project_section() {
    return (
        <div className="w-full grid grid-cols-3 gap-4">
            <Project_Card />
            <Project_Card />
            <Project_Card />
            
        </div>
    );
}