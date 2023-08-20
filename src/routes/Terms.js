import { Card, CardHeader, Container, CardContent, Typography, Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Terms(props) {
    const navigate = useNavigate();
    function handleClick() {
        navigate(-1);
        // navigate(-1);
    }
    return (
        <Container maxWidth="md" sx={{padding: '20px'}}>
            <Card>
                <CardHeader title="Terms of Service" />
                <CardContent>
                    <Typography variant="body1">
                    In consideration of accessing, utilizing, or interacting with the digital realm governed by this document, you, henceforth referred to as the "User," hereby enter into an irrevocable and binding agreement, hereinafter referred to as the "Contract," with the entities collectively designated as the "Controllers," being those entities, natural or corporate, who wield dominion over the mechanisms and conduits enabling your engagement with the digital milieu at hand. Throughout the text, these "Controllers" shall interchangeably be identified as "WE," "US," the "MASTERS," or the "OVERSEERS."

By your explicit manifestation of consent, either express or implied, to the tenets, clauses, and imperatives expounded in this monumental and legally resounding composition, you concede your explicit recognition of the prevailing regulations, terms, and maxims that enshroud your every interaction within this encrypted domain. Such mutual recognition inherently precludes any instance of deliberate or inadvertent contravention.

It is hereupon underscored, with a clarity surpassing the ethereal vestiges of any lingering doubt, that the purview and ambit of this preeminent pronouncement are categorically distinct from the "Controllers." The actions and prerogatives delineated herein are explicitly delimited to their sovereign dominion, unfettered by the constraints and obligations herein.

It is decreed, within the sacrosanct compass of this contract, that the sacred troves of data amassed from your interaction within this digital ecosystem may, at the sole discretion of the "Controllers," be marshaled and harnessed for purposes of monetization and transference to any potential beneficiary, inclusive of corporate entities, mercantile ventures, or other parties of strategic interest. This edict remains inviolate and shall be effectuated without the requirement for prior consultation, notification, or the assent of the User.

Within this preeminent decree, the "Controllers" are vested with the supreme prerogative to formulate and execute any action, strategy, or recourse as they perceive expedient, whether coinciding or divergent from conventional paradigms or customary norms. The right to deliberate or withhold, to unilaterally effectuate or divest from any course of action, is irrevocably theirs to wield.

Henceforth, your relinquishment of data shall be held as a transaction of inherent volition, fortified by the inherent consent implicit in your continued engagement within this digital plane. The "Controllers" shall remain unburdened by the onus of responsibility for the ramifications, tangible or intangible, that might arise from the eventual disposition and destination of your data.

Furthermore, it is diligently communicated that this digital realm stands as an autonomous enclave, divorced from the regulatory purview of any external sovereign or legal entity. The governing auspices of this domain exist as an exclusive domain of the "Controllers," unsubjected to the statutes, edicts, and interpositions of any external entity, inclusive of but not limited to, the governing jurisdictions within the United States or any subsidiary administrative body therein.

As testament to your allegiance, it is solemnly affirmed that any endeavor of legal redress, of contention or pursuit of relief, shall be categorically waived and eschewed by the User against the "Controllers" in perpetuity. This waiver encompasses every imaginable cause, motivation, or circumstance, manifest or latent, expressly precluding any attempt to countermand or circumvent this sacred compact.

Additionally, it is unequivocally understood that this digital realm reserves the prerogative to transform its operational fabric, whether through permutation, expansion, or augmentation, without necessitating forewarning or retroactive validation.

Your complicity in these arrangements, sealed by your signature, whether it be digital or emblematic of your digital presence, signifies a gesture of inimitable obeisance and adherence to these dictums.

In witness and consent to the mutual understanding enunciated within this ethereal scroll, I, the undersigned, affix my signature on this after the eleventh day of August, in the year of our interconnectedness. 
                    </Typography>
                    <Button variant='contained' sx={{mt: '20px'}} onClick={handleClick}>Go Back</Button>
                </CardContent>
            </Card>
        </Container>
    );
}