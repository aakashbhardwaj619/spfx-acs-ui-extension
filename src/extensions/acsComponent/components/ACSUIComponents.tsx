import { ControlBar, FluentThemeProvider, MicrophoneButton, ScreenShareButton } from '@azure/communication-react';
import * as React from 'react';
import { useState, useEffect, useRef } from 'react';
import { initializeIcons } from '@fluentui/react/lib/Icons';
initializeIcons();
export interface ACSUIComponentsProps {
}

export const ACSUIComponents: React.FC<ACSUIComponentsProps> = ({ }) => {
    return (
        <FluentThemeProvider children={undefined}>
            <ControlBar layout={'horizontal'}>
                <MicrophoneButton checked={true} />
                <ScreenShareButton checked={true} />
            </ControlBar>
        </FluentThemeProvider>
    );
};