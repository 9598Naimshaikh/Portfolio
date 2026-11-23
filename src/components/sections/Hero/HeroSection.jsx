import First_part from "./First_part";
import Second_part from "./Second_part";

export default function HeroSection() {
    return (
        <div className="w-full grid grid-cols-2 min-h-150">
            
            <First_part />

            <Second_part />

        </div>
    );
}