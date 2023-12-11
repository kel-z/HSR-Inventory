import { HoverCardContent } from "@/components/ui/hover-card";
import { Separator } from "@/components/ui/separator";
import { getLightConeStats } from "@/utils/light-cone-utils";
import { getRarityStyle } from "@/utils/style-utils";
import { LightConeMetadata } from "@/types/game-data";
import { LightCone } from "@/types/user-data/hsr-scanner";
import { formatDesc } from "@/utils/format-utils";

interface LightConeHoverCardContentProps {
  lc: LightCone;
  metadata: LightConeMetadata;
}
function LightConeHoverCardContent({
  lc,
  metadata,
}: LightConeHoverCardContentProps) {
  const stats = getLightConeStats(metadata, lc.level, lc.ascension);

  return (
    <HoverCardContent className="text-sm">
      <div className="flex justify-between">
        <div className={`font-semibold ${getRarityStyle(metadata.rarity)}`}>
          {lc.key}
        </div>
        <div className="text-muted-foreground/50">
          Lv. {lc.level} / {20 + 10 * lc.ascension}
        </div>
      </div>
      <Separator />
      <div className="grid grid-cols-1 grid-rows-3 p-2">
        {Object.entries(stats).map(([key, value]) => (
          <div key={key} className="flex flex-row justify-between">
            <div>{key.toUpperCase()}</div>
            <div>{Math.floor(value)}</div>
          </div>
        ))}
      </div>
      <div className="flex justify-between">
        <div>{metadata.ability.name}</div>
        <div className="text-muted-foreground/50">S{lc.superimposition}</div>
      </div>
      <Separator />
      <div className="p-2">
        {formatDesc(
          metadata.ability.desc,
          metadata.ability.params[lc.superimposition - 1],
        )}
      </div>
    </HoverCardContent>
  );
}

export default LightConeHoverCardContent;
