import { Button } from '@/components/ui/button';
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip"

export default function SignInButton() {
    return (
        <Tooltip>
            <TooltipTrigger asChild>
                <Button 
                    className="bg-[#A590DB] hover:bg-[#9582C5] active:bg-[#8473AF]"
                >
                    Sign In
                </Button>
            </TooltipTrigger>
            <TooltipContent className="bg-[#8473AF] text-white" arrowClassName="bg-[#8473AF] fill-[#8473AF]">
                Sign in functionality coming soon!
            </TooltipContent>
        </Tooltip>
    )
}