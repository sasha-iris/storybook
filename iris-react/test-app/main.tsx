import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import '../../storybook/iris-components.css';

import { Sidebar } from '../src/components/navigation/Sidebar';
import { Button } from '../src/components/button/Button';
import { ButtonGroup } from '../src/components/button/ButtonGroup';
import { ButtonLink } from '../src/components/button/ButtonLink';
import { ButtonSocial } from '../src/components/button/ButtonSocial';
import { ButtonSpecial } from '../src/components/button/ButtonSpecial';
import { Badge } from '../src/components/badge/Badge';
import { Chip } from '../src/components/chip/Chip';
import { Tag } from '../src/components/tag/Tag';
import { FormInput } from '../src/components/forms/FormInput';
import { FormSearch } from '../src/components/forms/FormSearch';
import { TagInput } from '../src/components/forms/TagInput';
import { FileUpload } from '../src/components/forms/FileUpload';
import { ReadOnlyField } from '../src/components/forms/ReadOnlyField';
import { CodeInput } from '../src/components/forms/CodeInput';
import { FormTextarea } from '../src/components/forms/FormTextarea';
import { Select } from '../src/components/select/Select';
import { Checkbox } from '../src/components/controls/Checkbox';
import { Toggle } from '../src/components/controls/Toggle';
import { RadioGroup } from '../src/components/controls/Radio';
import { RadioCardGroup } from '../src/components/controls/RadioCard';
import { RangeSlider } from '../src/components/range-slider/RangeSlider';
import { Alert } from '../src/components/alert/Alert';
import { Modal } from '../src/components/modal/Modal';
import { Tabs } from '../src/components/tabs/Tabs';
import { Pagination } from '../src/components/pagination/Pagination';
import { Accordion } from '../src/components/accordion/Accordion';
import { ProgressBar } from '../src/components/progress-bar/ProgressBar';
import { Breadcrumbs } from '../src/components/breadcrumbs/Breadcrumbs';
import { Skeleton } from '../src/components/skeleton/Skeleton';
import { KBD } from '../src/components/kbd/KBD';
import { Tooltip } from '../src/components/tooltip/Tooltip';
import { ListGroup } from '../src/components/list-group/ListGroup';
import { Card } from '../src/components/card/Card';
import { CardKPI } from '../src/components/card/CardKPI';
import { CardReporting } from '../src/components/card/CardReporting';
import { Stepper, StandaloneSteps } from '../src/components/stepper/Stepper';
import { Dropdown } from '../src/components/dropdown/Dropdown';
import { NotificationMenu } from '../src/components/dropdown/NotificationMenu';
import { FilterSelectButton } from '../src/components/dropdown/FilterSelectButton';
import { IndicatorDot, IndicatorBadge } from '../src/components/indicators/Indicator';
import { Banner } from '../src/components/banner/Banner';
import { Toast } from '../src/components/toast/Toast';
import { AddWidgetModal } from '../src/components/add-widget/AddWidgetModal';
import { Autocomplete } from '../src/components/autocomplete/Autocomplete';
import { Drawer } from '../src/components/drawer/Drawer';
import { CohortCell, IrisCell, IrisTH } from '../src/components/table/TableCohort';
import { QRFrame } from '../src/components/qr/QRFrame';
import { DataCell, LabelCell, HHeader, VHeader } from '../src/components/table/Table';
import { TableComposed } from '../src/components/table/TableComposed';
import { UserProfileCard, PricingCard, StatsCard, SignInCard, EcommerceCard, CustomerListCard, CTACard, NavTabsCard, TestimonialCard, CryptoWalletCard, CardWithButton, CardWithLink, HorizontalCard } from '../src/components/card/CardLayouts';
import { CardStateWrapper } from '../src/components/card/CardStates';
import { Datepicker, DateRangePicker, MonthPicker, YearPicker, DobPicker, MonthYearTabPicker } from '../src/components/datepicker/Datepicker';
import { SearchBar } from '../src/components/search/Search';
import { Logo } from '../src/components/brand/Logo';

// ── Icons (minimal inline SVGs) ───────────────────────────────────────────────

const Icon = ({ d }: { d: string }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d={d} />
  </svg>
);

// ── Nav items ─────────────────────────────────────────────────────────────────

const NAV = [
  { key: 'button',      label: 'Button',       icon: <Icon d="M4 12h16M12 5l7 7-7 7" /> },
  { key: 'badge',       label: 'Badge & Tag',  icon: <Icon d="M7 7h10v10H7z" /> },
  { key: 'forms',       label: 'Forms',        icon: <Icon d="M4 6h16M4 12h16M4 18h10" /> },
  { key: 'controls',    label: 'Controls',     icon: <Icon d="M9 12l2 2 4-4" /> },
  { key: 'feedback',    label: 'Feedback',     icon: <Icon d="M13 16h-1v-4h-1m1-4h.01" /> },
  { key: 'navigation',  label: 'Navigation',   icon: <Icon d="M3 12h18M3 6h18M3 18h18" /> },
  { key: 'card',        label: 'Card',         icon: <Icon d="M3 5h18v14H3z" /> },
  { key: 'data',        label: 'Data Display', icon: <Icon d="M3 3h18v4H3zM3 10h8v11H3zM14 10h7v5h-7zM14 18h7v3h-7z" /> },
  { key: 'modal',       label: 'Modal',        icon: <Icon d="M8 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-3M21 3l-9 9M15 3h6v6" /> },
  { key: 'extra',       label: 'Extra',        icon: <Icon d="M12 6v6m0 0v6m0-6h6m-6 0H6" /> },
  { key: 'new',         label: 'New',          icon: <Icon d="M5 3l14 9-14 9V3z" /> },
];

// ── Pages ─────────────────────────────────────────────────────────────────────

function Row({ children }: { children: React.ReactNode }) {
  return <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'flex-start', marginBottom: 24 }}>{children}</div>;
}

function PageButton() {
  const [active, setActive] = useState(0);
  return (
    <>
      <Row>
        <Button label="Primary" color="primary" size="md" />
        <Button label="Dark" color="dark" size="md" />
        <Button label="Green" color="green" size="md" />
        <Button label="Red" color="red" size="md" />
        <Button label="Alternative" color="alternative" size="md" />
        <Button label="Outline" color="primary" size="md" outline />
      </Row>
      <Row>
        <Button label="Small" color="primary" size="sm" />
        <Button label="Medium" color="primary" size="md" />
        <Button label="Large" color="primary" size="lg" />
        <Button label="Disabled" color="primary" size="md" disabled />
        <Button label="Pill" color="primary" size="md" pill />
      </Row>
      <Row>
        <ButtonGroup segments={[{ label: 'List' }, { label: 'Kanban' }, { label: 'Timeline' }]} activeIndex={active} onChange={setActive} />
        <ButtonGroup segments={[{ label: 'Cumulative' }, { label: 'Daily' }]} activeIndex={active} onChange={setActive} primary />
      </Row>
      <Row>
        <ButtonLink label="Semibold link" type="semibold" />
        <ButtonLink label="Medium link" type="medium" />
        <ButtonLink label="With href" type="semibold" href="#" />
      </Row>
      <Row>
        <ButtonSocial
          label="Continue with Google"
          color="white-outline"
          icon={<svg width="18" height="18" viewBox="0 0 18 18"><path fill="#4285F4" d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844a4.14 4.14 0 01-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z"/><path fill="#34A853" d="M9 18c2.43 0 4.467-.806 5.956-2.184l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332C2.438 15.983 5.482 18 9 18z"/><path fill="#FBBC05" d="M3.964 10.706A5.41 5.41 0 013.682 9c0-.593.102-1.17.282-1.706V4.962H.957A8.996 8.996 0 000 9c0 1.452.348 2.827.957 4.038l3.007-2.332z"/><path fill="#EA4335" d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0 5.482 0 2.438 2.017.957 4.962L3.964 7.294C4.672 5.167 6.656 3.58 9 3.58z"/></svg>}
        />
        <ButtonSocial label="Sign in with GitHub" color="dark" icon={<svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor"><path d="M9 0C4.025 0 0 4.025 0 9c0 3.98 2.58 7.355 6.158 8.546.45.082.617-.196.617-.434 0-.214-.008-.78-.012-1.53-2.505.544-3.034-1.207-3.034-1.207-.41-1.04-1-1.317-1-1.317-.817-.558.062-.547.062-.547.904.064 1.38.929 1.38.929.803 1.378 2.108.98 2.622.75.08-.583.31-.98.564-1.205-1.97-.224-4.043-.985-4.043-4.385 0-.97.345-1.762.91-2.382-.092-.224-.396-1.125.086-2.345 0 0 .744-.238 2.437.91A8.498 8.498 0 019 4.27c.752.003 1.51.102 2.218.3 1.693-1.148 2.435-.91 2.435-.91.483 1.22.18 2.121.087 2.345.567.62.91 1.411.91 2.382 0 3.41-2.077 4.158-4.054 4.378.319.274.602.816.602 1.645 0 1.187-.01 2.144-.01 2.434 0 .24.164.52.62.432A9.001 9.001 0 0018 9c0-4.975-4.025-9-9-9z"/></svg>} />
      </Row>
      <Row>
        <ButtonSpecial variant="chart" icon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M5 12h14M12 5l7 7-7 7"/></svg>} ariaLabel="Navigate chart" />
        <ButtonSpecial variant="table" icon={<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M5 12h14M12 5l7 7-7 7"/></svg>} ariaLabel="Navigate table" />
        <ButtonSpecial variant="chart" disabled icon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M5 12h14M12 5l7 7-7 7"/></svg>} ariaLabel="Disabled" />
      </Row>
    </>
  );
}

function PageBadge() {
  return (
    <>
      <Row>
        <Badge label="Gray" color="gray" />
        <Badge label="Blue" color="blue" />
        <Badge label="Green" color="green" />
        <Badge label="Red" color="red" />
        <Badge label="Purple" color="purple" />
        <Badge label="Yellow" color="yellow" />
        <Badge label="Pink" color="pink" />
        <Badge label="Small" color="indigo" size="sm" />
        <Badge label="Large" color="pink" size="lg" />
        <Badge label="Dismiss" color="blue" onDismiss={() => {}} />
      </Row>
      <Row>
        <Badge label="Critical" color="red" sub="11.0% rev" />
        <Badge label="Warning" color="yellow" sub="4.2% rev" />
      </Row>
      <Row>
        <Chip label="Light" color="light" />
        <Chip label="Dark" color="dark" />
        <Chip label="Indigo" color="indigo" />
        <Chip label="Green" color="green" />
        <Chip label="Red" color="red" />
        <Chip label="With ×" color="indigo" onDismiss={() => {}} />
      </Row>
      <Row>
        <Tag label="Finance" color="indigo" dot />
        <Tag label="Q4 2024" color="green" dot />
        <Tag label="Draft" color="orange" dot />
        <Tag label="Dismiss" color="blue" dot onDismiss={() => {}} />
        <Tag label="Teal" color="teal" />
        <Tag label="Purple" color="purple" />
      </Row>
    </>
  );
}

function PageForms() {
  const [input, setInput] = useState('');
  const [search, setSearch] = useState('');
  const [sel, setSel] = useState('');
  const [tags, setTags] = useState(['bonnie.green@company.com', 'jese.leos@company.com']);
  const [multiselectTags, setMultiselectTags] = useState(['Design', 'Engineering']);
  const [code, setCode] = useState('');
  return (
    <>
      <Row>
        <div style={{ width: 280 }}>
          <FormInput label="Email" value={input} onChange={setInput} placeholder="name@company.com" />
        </div>
        <div style={{ width: 280 }}>
          <FormInput label="Error state" value="" onChange={() => {}} fieldState="error" helpText="Required." />
        </div>
        <div style={{ width: 280 }}>
          <FormSearch value={search} onChange={setSearch} placeholder="Search..." />
        </div>
        <div style={{ width: 280 }}>
          <FormTextarea label="Message" value="" onChange={() => {}} placeholder="Write here..." rows={3} />
        </div>
        <div style={{ width: 240 }}>
          <Select label="Language" options={[{ value: 'en', label: 'English' }, { value: 'fr', label: 'French' }]} value={sel} onChange={setSel} placeholder="Select" />
        </div>
        <div style={{ width: 240 }}>
          <Select label="Native" options={[{ value: 'en', label: 'English' }, { value: 'fr', label: 'French' }]} value={sel} onChange={setSel} variant="native" />
        </div>
      </Row>
      <Row>
        <div style={{ width: 320 }}>
          <TagInput label="Tags" tags={tags} onChange={setTags} placeholder="Add tag..." helpText="A note for extra info" />
        </div>
        <div style={{ width: 320 }}>
          <TagInput variant="indigo" tags={multiselectTags} onChange={setMultiselectTags} placeholder="Placeholder" />
        </div>
        <div style={{ width: 280 }}>
          <CodeInput value={code} onChange={setCode} helpText="Enter the 6-digit code from your authenticator app." />
        </div>
      </Row>
      <Row>
        <div style={{ width: 280 }}>
          <FileUpload type="default" />
        </div>
        <div style={{ width: 280 }}>
          <FileUpload type="drag" label="Upload image" />
        </div>
        <div style={{ width: 280 }}>
          <FileUpload type="drag-btn" label="Upload CSV" />
        </div>
        <div style={{ width: 280 }}>
          <ReadOnlyField label="Email:" value="namesurname@company.com" />
        </div>
      </Row>
    </>
  );
}

function PageControls() {
  const [checked, setChecked] = useState(false);
  const [toggled, setToggled] = useState(true);
  const [radio, setRadio] = useState('a');
  const [radioCard, setRadioCard] = useState('sms');
  const [slider, setSlider] = useState(40);
  return (
    <>
      <Row>
        <Checkbox label="Accept terms" checked={checked} onChange={setChecked} />
        <Checkbox label="Checked" checked={true} onChange={() => {}} />
        <Checkbox label="Destructive" checked={false} onChange={() => {}} destructive />
        <Toggle label="Email notifications" on={toggled} onChange={setToggled} />
        <Toggle label="Disabled" on={false} onChange={() => {}} disabled />
      </Row>
      <Row>
        <RadioGroup name="plan" options={[{ value: 'a', label: 'Free' }, { value: 'b', label: 'Pro' }, { value: 'c', label: 'Enterprise' }]} value={radio} onChange={setRadio} />
      </Row>
      <Row>
        <div style={{ width: 420 }}>
          <RadioCardGroup
            name="auth"
            value={radioCard}
            onChange={setRadioCard}
            options={[
              { value: 'sms', label: 'SMS', helper: 'Receive a code via text message' },
              { value: 'app', label: 'Authenticator App', helper: 'Use an authenticator app' },
              { value: 'email', label: 'Email', helper: 'Receive a code via email', disabled: true },
            ]}
          />
        </div>
      </Row>
      <Row>
        <div style={{ width: 320 }}>
          <RangeSlider value={slider} onChange={setSlider} label="Volume" showValue />
        </div>
      </Row>
    </>
  );
}

function PageFeedback() {
  const checkCircleIcon = (
    <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
    </svg>
  );
  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 24 }}>
        <Alert heading="Success" body="Your changes were saved." color="success" icon={checkCircleIcon} onDismiss={() => {}} />
        <Alert heading="Error" body="Something went wrong." color="danger" icon={checkCircleIcon} onDismiss={() => {}} />
        <Alert heading="Info" color="info" icon={checkCircleIcon} />
        <Alert heading="Warning" color="warning" icon={checkCircleIcon} />
        <Banner variant="default" text="New features available!" ctaLabel="Learn more" onCta={() => {}} onDismiss={() => {}} />
        <Banner variant="container-cta" text="Build websites even faster with components on top of Tailwind CSS." ctaLabel="Sign up for free" onCta={() => {}} onDismiss={() => {}} />
        <Banner variant="bottom" text="Get 2% pricing commission" link="Become a partner" onLinkClick={() => {}} onDismiss={() => {}} />
        <Banner variant="cta" heading="Integration is the key" text="You can integrate Iris Finance with many tools to make your workflow smoother." ctaLabel="Get started" onCta={() => {}} secondaryCtaLabel="Learn more" onSecondaryCta={() => {}} onDismiss={() => {}} />
        <Banner variant="newsletter" text="Sign up to our newsletter" onSubscribe={() => {}} onDismiss={() => {}} />
      </div>
      <Row>
        <Toast title="Changes saved" color="success" onDismiss={() => {}} />
        <Toast title="Upload failed" color="danger" onDismiss={() => {}} />
        <Toast title="Processing..." color="default" />
        <Toast variant="simple" title="New message from Bonnie" />
        <Toast variant="push" title="Bonnie Green" description="commented on your post" onDismiss={() => {}} />
        <Toast variant="interactive" title="Update available" description="A new version is ready to install." ctaLabel="Update now" onCta={() => {}} onSecondary={() => {}} onDismiss={() => {}} />
      </Row>
      <Row>
        <Tooltip content="Save your changes" position="top">
          <Button label="Hover me" color="primary" size="sm" />
        </Tooltip>
        <Tooltip content="Delete" position="right" color="dark">
          <Button label="Right tooltip" color="alternative" size="sm" />
        </Tooltip>
      </Row>
    </>
  );
}

function PageNavigation() {
  const [tab, setTab] = useState('overview');
  const [page, setPage] = useState(3);
  const [category, setCategory] = useState<string[]>([]);
  return (
    <>
      <div style={{ marginBottom: 24 }}>
        <Tabs tabs={[{ key: 'overview', label: 'Overview' }, { key: 'txn', label: 'Transactions', count: 42 }, { key: 'reports', label: 'Reports', dropdown: true }]} activeKey={tab} onChange={setTab} />
      </div>
      <Row>
        <Breadcrumbs items={[{ label: 'Home', href: '#' }, { label: 'Settings', href: '#' }, { label: '2FA' }]} />
        <Breadcrumbs items={[{ label: 'Home', href: '#' }, { label: 'Reports' }]} variant="bg" />
      </Row>
      <Row>
        <Pagination currentPage={page} totalPages={10} onPageChange={setPage} totalItems={96} pageSize={10} />
      </Row>
      <div style={{ marginBottom: 24 }}>
        <Stepper steps={[{ label: 'Account' }, { label: 'Plan' }, { label: 'Payment' }, { label: 'Done' }]} activeStep={1} />
      </div>
      <div style={{ marginBottom: 24, maxWidth: 860 }}>
        <StandaloneSteps steps={[
          { title: 'Install an authenticator app', description: 'Download and install an authenticator app on your mobile device.' },
          { title: 'Scan the QR code', description: 'Open the app and scan the QR code or enter the setup key manually.' },
          { title: 'Enter the code', description: 'Enter the 6-digit code from the app to verify and complete setup.' },
        ]} />
      </div>
      <Row>
        <Dropdown
          trigger={<Button label="Actions ▾" color="alternative" size="md" />}
          items={[
            { key: 'edit', label: 'Edit', onClick: () => {} },
            { key: 'duplicate', label: 'Duplicate', onClick: () => {} },
            { key: 'delete', label: 'Delete', danger: true, dividerBefore: true, onClick: () => {} },
          ]}
        />
        <FilterSelectButton
          label="Category"
          icon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" /></svg>}
          options={[{ value: 'electronics', label: 'Electronics' }, { value: 'clothing', label: 'Clothing' }, { value: 'books', label: 'Books' }]}
          selected={category}
          onChange={setCategory}
          onClear={() => setCategory([])}
        />
      </Row>
      <Row>
        <NotificationMenu
          notifications={[
            { initials: 'JL', message: 'Jese Leos: "Hey, what\'s up? All set for the presentation?"', time: 'a few moments ago' },
            { initials: 'JM', message: 'Joseph McFall and 5 others started following you.', time: '10 minutes ago' },
            { initials: 'BG', message: 'Bonnie Green and 141 others love your story.', time: '44 minutes ago' },
          ]}
          onViewAll={() => {}}
        />
      </Row>
      <h2 style={{ fontSize: 16, fontWeight: 600, margin: '24px 0 12px' }}>Sidebar — expandable nav item</h2>
      <div style={{ height: 360, width: 240, border: '1px solid var(--color-border-default)', borderRadius: 8, overflow: 'hidden' }}>
        <Sidebar
          items={[
            { key: 'overview', label: 'Overview', icon: <Icon d="M3 12h18M3 6h18M3 18h18" /> },
            {
              key: 'financial', label: 'Financial model', icon: <Icon d="M12 1v22M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />,
              children: [
                { key: 'revenue', label: 'Revenue' },
                { key: 'expenses', label: 'Expenses' },
              ],
            },
            { key: 'settings', label: 'Settings', icon: <Icon d="M9 12l2 2 4-4" /> },
          ]}
          activeKey="revenue"
          onItemClick={() => {}}
          color="gray"
        />
      </div>
    </>
  );
}

function PageCard() {
  const [reportOn, setReportOn] = useState(true);
  return (
    <>
      <Row>
        <div style={{ width: 320 }}>
          <CardReporting
            title="Daily Report"
            enabled={reportOn}
            onToggle={setReportOn}
            scheduleText={reportOn ? 'Every day at 7am (PST)' : "Right now the report is paused. We'll send it to you at 7am tomorrow morning when you turn it on"}
            channels={['email', 'slack']}
            recipients={['namesur@gmail.com', 'name@gmail.com']}
            salesChannels={['shopify', 'amazon']}
            owner="iris"
          />
        </div>
        <div style={{ width: 320 }}>
          <CardReporting
            title="Weekly Summary"
            enabled
            hovered
            onToggle={() => {}}
            scheduleText="Every Monday at 9am (PST)"
            channels={['email']}
            recipients={['team@company.com']}
            salesChannels={['shopify']}
            owner="user"
            ownerName="Jese Leos"
          />
        </div>
      </Row>
      <Row>
        <div style={{ width: 300 }}>
          <Card title="Recent Activity" subtitle="Last 30 days" body="Your account has 12 new transactions this week." />
        </div>
      </Row>
      <Row>
        <CardKPI label="Total Sales" value="$16,416" trendPct="+12.5%" direction="up" chartType="linechart" />
        <CardKPI label="Total Sales" value="$16,416" trendPct="-23.17%" direction="down" chartType="linechart" />
        <CardKPI label="Spend" value="$3,200" trendPct="+8.4%" direction="up" chartType="barchart" />
        <CardKPI label="Spend" value="$3,200" trendPct="-5.1%" direction="down" chartType="barchart" />
      </Row>
      <Row>
        <CardWithButton title="Noteworthy technology acquisitions 2021" body="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order." onCta={() => {}} />
        <CardWithLink title="Terms of Service" body="Review our full terms of service — understand your rights and responsibilities when using the Iris platform." onLinkClick={() => {}} />
      </Row>
      <Row>
        <HorizontalCard imageUrl="https://picsum.photos/seed/horizcard/192/258" title="Noteworthy technology acquisitions 2021" body="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order." />
      </Row>
    </>
  );
}

function PageData() {
  return (
    <>
      <Row>
        <div style={{ width: 320 }}>
          <ProgressBar value={72} color="primary" label="above" />
        </div>
        <div style={{ width: 320 }}>
          <ProgressBar value={45} color="green" />
        </div>
        <div style={{ width: 320 }}>
          <ProgressBar value={20} color="orange" />
        </div>
      </Row>
      <Row>
        <div style={{ width: 300, display: 'flex', flexDirection: 'column', gap: 8 }}>
          <Skeleton variant="text" width="100%" height={12} />
          <Skeleton variant="text" width="80%" height={12} />
          <Skeleton variant="text" width="60%" height={12} />
        </div>
        <Skeleton variant="avatar" width={48} height={48} />
        <Skeleton variant="image" width={200} height={120} borderRadius={8} />
      </Row>
      <Row>
        <KBD keys="⌘K" />
        <KBD keys={['⌘', 'Shift', 'P']} />
        <KBD keys="Enter" size="sm" />
      </Row>
      <Row>
        <IndicatorDot label="Revenue" color="blue" />
        <IndicatorDot label="Expenses" color="purple" />
        <IndicatorDot label="Profit" color="teal" />
        <IndicatorDot label="Custom red" customColor="#f05252" />
        <IndicatorBadge variant="available" />
        <IndicatorBadge variant="unavailable" />
      </Row>
      <div style={{ marginBottom: 24 }}>
        <Accordion
          items={[
            { key: '1', title: 'What is Iris?', body: 'Iris is a design system with React components.' },
            { key: '2', title: 'How do I use it?', body: 'Import from iris-react and add iris-components.css.' },
          ]}
          defaultOpenKey="1"
        />
      </div>
      {/* ListGroup — default */}
      <Row>
        <ListGroup
          width={200}
          items={[
            { key: 'profile',  label: 'Profile',  count: 3 },
            { key: 'settings', label: 'Settings', active: true },
            { key: 'messages', label: 'Messages', count: 12 },
            { key: 'billing',  label: 'Billing' },
          ]}
        />
        <ListGroup dark width={200} items={[{ key: 'a', label: 'Dark item 1' }, { key: 'b', label: 'Dark item 2', active: true }]} />
      </Row>

      {/* ListGroup — flush, embedded in a bordered panel */}
      <Row>
        <div style={{ width: 200, border: '1px solid var(--color-border-default)', borderRadius: 'var(--radius-md)', overflow: 'hidden' }}>
          <div style={{ padding: '8px 12px', borderBottom: '1px solid var(--color-border-default)', fontSize: 'var(--text-xs)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-text-secondary)' }}>
            Category
          </div>
          <ListGroup
            flush
            items={[
              { key: 'all',    label: 'All',     count: 42, active: true, onClick: () => {} },
              { key: 'open',   label: 'Open',    count: 18, onClick: () => {} },
              { key: 'closed', label: 'Closed',  count: 24, onClick: () => {} },
            ]}
          />
        </div>
      </Row>
    </>
  );
}

function PageModal() {
  const [open, setOpen] = useState(false);
  const [basicOpen, setBasicOpen] = useState(false);
  const [popupOpen, setPopupOpen] = useState(false);
  return (
    <>
      <Row>
        <Button label="Open Add Widget" color="primary" size="md" onClick={() => setOpen(true)} />
        <Button label="Basic Modal" color="alternative" size="md" onClick={() => setBasicOpen(true)} />
        <Button label="PopUp Confirm" color="alternative" size="md" onClick={() => setPopupOpen(true)} />
      </Row>
      <Modal open={popupOpen} onClose={() => setPopupOpen(false)} size="sm"
        footer={
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', width: '100%' }}>
            <Button label="Yes, I'm sure" color="red" size="md" onClick={() => setPopupOpen(false)} />
            <Button label="No, cancel" color="alternative" size="md" onClick={() => setPopupOpen(false)} />
          </div>
        }
      >
        <div style={{ textAlign: 'center' }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 16 }}>
            <svg width="28" height="28" viewBox="0 0 20 20" fill="none" stroke="#f05252" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M10 6v4m0 4h.01M10 18a8 8 0 100-16 8 8 0 000 16z" /></svg>
          </div>
          <p style={{ margin: 0, fontSize: 'var(--text-base)', lineHeight: 1.6, color: 'var(--color-text-secondary)' }}>Are you sure you want to delete this product?</p>
        </div>
      </Modal>
      <AddWidgetModal open={open} onClose={() => setOpen(false)} onConfirm={() => setOpen(false)} />
      <Modal open={basicOpen} onClose={() => setBasicOpen(false)} title="Confirm deletion"
        footer={
          <div style={{ display: 'flex', gap: 8, justifyContent: 'flex-end', width: '100%' }}>
            <Button label="Cancel" color="alternative" size="md" onClick={() => setBasicOpen(false)} />
            <Button label="Delete" color="red" size="md" onClick={() => setBasicOpen(false)} />
          </div>
        }
      >
        <p style={{ color: 'var(--color-text-secondary)', margin: 0 }}>Are you sure you want to delete this item? This action cannot be undone.</p>
      </Modal>
    </>
  );
}

function PageExtra() {
  const [acVal, setAcVal] = useState('');
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [searchVal, setSearchVal] = useState('');
  const [searchCategory, setSearchCategory] = useState('All categories');
  const [plainSearchVal, setPlainSearchVal] = useState('');
  const [flagSearchVal, setFlagSearchVal] = useState('');
  const [insideSearchVal, setInsideSearchVal] = useState('');
  const PRODUCTS = [
    { value: 'rev', label: 'Gross Revenue', group: 'Finance' },
    { value: 'mer', label: 'Marketing Efficiency Ratio', group: 'Finance' },
    { value: 'users', label: 'Active Users', group: 'Growth' },
    { value: 'churn', label: 'Churn Rate', group: 'Growth' },
    { value: 'nps', label: 'NPS Score', group: 'Customer' },
  ];
  const COHORT_WEEKS = ['Week 1', 'Week 2', 'Week 3', 'Week 4'];
  const COHORT_DATA = [
    [100, 72, 54, 41],
    [100, 68, 49, null],
    [100, 75, null, null],
    [100, null, null, null],
  ];
  return (
    <>
      <h2 style={{ fontSize: 16, fontWeight: 600, marginBottom: 12 }}>Autocomplete</h2>
      <Row>
        <div style={{ width: 320 }}>
          <Autocomplete options={PRODUCTS} value={acVal} onChange={setAcVal} label="Search metric" placeholder="Type to search…" />
        </div>
      </Row>

      <h2 style={{ fontSize: 16, fontWeight: 600, margin: '24px 0 12px' }}>Drawer</h2>
      <Row>
        <Button label="Open Drawer" color="primary" size="md" onClick={() => setDrawerOpen(true)} />
      </Row>
      <Drawer open={drawerOpen} onClose={() => setDrawerOpen(false)} title="Filter panel"
        footer={
          <div style={{ display: 'flex', gap: 8, justifyContent: 'flex-end', width: '100%' }}>
            <Button label="Cancel" color="alternative" size="md" onClick={() => setDrawerOpen(false)} />
            <Button label="Apply" color="primary" size="md" onClick={() => setDrawerOpen(false)} />
          </div>
        }
      >
        <p style={{ color: 'var(--color-text-secondary)', margin: 0 }}>Drawer content goes here. Use for filter panels, detail views, and side sheets.</p>
      </Drawer>

      <h2 style={{ fontSize: 16, fontWeight: 600, margin: '24px 0 12px' }}>Cohort Table</h2>
      <Row>
        <div style={{ overflowX: 'auto', display: 'inline-flex', flexDirection: 'column', minWidth: 'max-content' }}>
          <div style={{ display: 'flex', alignItems: 'stretch', borderBottom: '1px solid var(--color-border-default)' }}>
            <IrisTH width={140}>Cohort</IrisTH>
            {COHORT_WEEKS.map(w => <IrisTH key={w} width={70} align="center">{w}</IrisTH>)}
          </div>
          {COHORT_DATA.map((row, ri) => (
            <div key={ri} style={{ display: 'flex', alignItems: 'stretch', borderBottom: '1px solid var(--color-border-default)' }}>
              <IrisCell>{`Jan W${ri + 1}`}</IrisCell>
              {COHORT_WEEKS.map((_, ci) => (
                row[ci] != null
                  ? <CohortCell key={ci} value={row[ci] as number} />
                  : <CohortCell key={ci} band="empty" />
              ))}
            </div>
          ))}
        </div>
      </Row>

      <h2 style={{ fontSize: 16, fontWeight: 600, margin: '24px 0 12px' }}>QR Frame</h2>
      <Row>
        <QRFrame>
          <svg width="80" height="80" viewBox="0 0 80 80" aria-label="QR placeholder">
            <rect width="80" height="80" fill="#f3f4f6" />
            <rect x="8" y="8" width="28" height="28" rx="2" fill="#1f2a37" />
            <rect x="12" y="12" width="20" height="20" rx="1" fill="#f9fafb" />
            <rect x="16" y="16" width="12" height="12" rx="1" fill="#1f2a37" />
            <rect x="44" y="8" width="28" height="28" rx="2" fill="#1f2a37" />
            <rect x="48" y="12" width="20" height="20" rx="1" fill="#f9fafb" />
            <rect x="52" y="16" width="12" height="12" rx="1" fill="#1f2a37" />
            <rect x="8" y="44" width="28" height="28" rx="2" fill="#1f2a37" />
            <rect x="12" y="48" width="20" height="20" rx="1" fill="#f9fafb" />
            <rect x="16" y="52" width="12" height="12" rx="1" fill="#1f2a37" />
            <rect x="44" y="44" width="8" height="8" fill="#1f2a37" />
            <rect x="56" y="44" width="8" height="8" fill="#1f2a37" />
            <rect x="44" y="56" width="8" height="8" fill="#1f2a37" />
            <rect x="56" y="56" width="8" height="8" fill="#1f2a37" />
          </svg>
        </QRFrame>
      </Row>

      <h2 style={{ fontSize: 16, fontWeight: 600, margin: '24px 0 12px' }}>Search</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 24 }}>
        <div style={{ maxWidth: 480 }}>
          <SearchBar
            type="input-select-btn"
            value={searchVal}
            onChange={setSearchVal}
            category={searchCategory}
            categories={['All categories', 'Mockups', 'Logos', 'Templates']}
            onCategoryChange={setSearchCategory}
            placeholder="Search Mockups, Logos, Design Templates..."
          />
        </div>
        <div style={{ maxWidth: 320 }}>
          <SearchBar type="input-btn" value={plainSearchVal} onChange={setPlainSearchVal} placeholder="Search" />
        </div>
        <div style={{ maxWidth: 320 }}>
          <SearchBar type="input-flag" value={flagSearchVal} onChange={setFlagSearchVal} countryLabel="USA" placeholder="Search for city" />
        </div>
        <div style={{ maxWidth: 420 }}>
          <SearchBar type="btn-inside" value={insideSearchVal} onChange={setInsideSearchVal} placeholder="Search Mockups, Logos ..." />
        </div>
      </div>

      <h2 style={{ fontSize: 16, fontWeight: 600, margin: '24px 0 12px' }}>Logo</h2>
      <Row>
        <Logo size="xs" />
        <Logo size="sm" />
        <Logo size="md" />
        <Logo size="lg" />
        <Logo size="sm" showText={false} />
      </Row>
      <div style={{ background: '#101828', padding: 24, borderRadius: 12, display: 'inline-flex', gap: 24 }}>
        <Logo size="sm" dark />
        <Logo size="md" dark />
        <Logo size="lg" dark />
      </div>
    </>
  );
}

function PageNew() {
  const [cardState, setCardState] = useState<'loaded' | 'loading' | 'empty' | 'error'>('loaded');
  const [dateVal, setDateVal] = useState('');
  const [rangeStart, setRangeStart] = useState('');
  const [rangeEnd, setRangeEnd] = useState('');
  return (
    <>
      <h2 style={{ fontSize: 16, fontWeight: 600, margin: '0 0 16px' }}>Datepicker</h2>
      <Row>
        <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
          <div>
            <p style={{ margin: '0 0 8px', fontSize: 13, color: 'var(--color-text-secondary)' }}>Single date</p>
            <Datepicker placeholder="Select date" onChange={setDateVal} />
            {dateVal && <p style={{ marginTop: 8, fontSize: 12, color: 'var(--color-text-secondary)' }}>Selected: {dateVal}</p>}
          </div>
          <div>
            <p style={{ margin: '0 0 8px', fontSize: 13, color: 'var(--color-text-secondary)' }}>Date range</p>
            <DateRangePicker onChange={(s, e) => { setRangeStart(s); setRangeEnd(e); }} />
            {rangeStart && <p style={{ marginTop: 8, fontSize: 12, color: 'var(--color-text-secondary)' }}>{rangeStart} → {rangeEnd}</p>}
          </div>
          <div>
            <p style={{ margin: '0 0 8px', fontSize: 13, color: 'var(--color-text-secondary)' }}>Month</p>
            <MonthPicker onChange={() => {}} />
          </div>
          <div>
            <p style={{ margin: '0 0 8px', fontSize: 13, color: 'var(--color-text-secondary)' }}>Year</p>
            <YearPicker onChange={() => {}} />
          </div>
          <div>
            <p style={{ margin: '0 0 8px', fontSize: 13, color: 'var(--color-text-secondary)' }}>Date of birth</p>
            <DobPicker onChange={() => {}} />
          </div>
          <div>
            <p style={{ margin: '0 0 8px', fontSize: 13, color: 'var(--color-text-secondary)' }}>Month / Year tab</p>
            <MonthYearTabPicker onChange={() => {}} />
          </div>
        </div>
      </Row>

      <h2 style={{ fontSize: 16, fontWeight: 600, margin: '24px 0 16px' }}>Table (Cells)</h2>
      <Row>
        <TableComposed
          periodHeaders={[{ label: 'ACTUALS', type: 'actuals', width: 120 }, { label: 'FORECAST', type: 'forecast', width: 120 }]}
          colHeaders={[{ label: 'Revenue', type: 'income', width: 120 }, { label: 'Total', type: 'total', bold: true, width: 120 }]}
          rows={[
            { label: 'Online Sales', cells: [{ amount: '142,500' }, { amount: '142,500', option: 'calculated' }] },
            { label: 'Offline Sales', cells: [{ amount: '38,200' }, { amount: '38,200', option: 'calculated' }] },
            { label: 'Total Revenue', rowType: 'total', bold: true, cells: [{ amount: '180,700', option: 'calculated' }, { amount: '180,700', option: 'calculated' }] },
          ]}
        />
      </Row>

      <h2 style={{ fontSize: 16, fontWeight: 600, margin: '24px 0 16px' }}>Card Layouts</h2>
      <Row>
        <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap', alignItems: 'flex-start' }}>
          <UserProfileCard name="Bonnie Green" role="Visual Designer" />
          <PricingCard
            planName="Standard plan"
            price="$49"
            enabledFeatures={['2 team members', '20GB Cloud storage', 'Integration help']}
            disabledFeatures={['Sketch Files', 'API Access', 'Complete documentation']}
          />
        </div>
      </Row>

      <h2 style={{ fontSize: 16, fontWeight: 600, margin: '24px 0 16px' }}>Card States</h2>
      <Row>
        <div style={{ display: 'flex', gap: 12, marginBottom: 16 }}>
          {(['loaded', 'loading', 'empty', 'error'] as const).map(s => (
            <button key={s} type="button" onClick={() => setCardState(s)}
              className={`btn btn-sm ${cardState === s ? 'btn-primary' : 'btn-alternative'}`}>{s}</button>
          ))}
        </div>
        <div className="card" style={{ width: 320, border: '1px solid var(--color-border-default)', borderRadius: 8 }}>
          <div className="card-header" style={{ padding: '12px 16px', borderBottom: '1px solid var(--color-border-default)' }}>
            <div className="card-header-title">Revenue</div>
          </div>
          <CardStateWrapper
            state={cardState}
            emptyHeading="No revenue data"
            emptyDescription="Revenue will appear once your first transaction is recorded."
            onRetry={() => setCardState('loaded')}
          >
            <div className="card-body-padded" style={{ padding: '16px' }}>
              <p style={{ margin: 0, fontSize: 28, fontWeight: 700, color: '#111928' }}>$142,500</p>
              <p style={{ margin: '4px 0 0', fontSize: 13, color: 'var(--color-text-secondary)' }}>↑ 12% vs last month</p>
            </div>
          </CardStateWrapper>
        </div>
      </Row>

      <h2 style={{ fontSize: 16, fontWeight: 600, margin: '24px 0 16px' }}>Stats Card</h2>
      <Row>
        <StatsCard
          tabs={['Statistics', 'Services', 'FAQ']}
          stats={[
            { value: '73M+', label: 'Developers' },
            { value: '100M+', label: 'Public repositories' },
            { value: '1000s', label: 'Open source projects' },
            { value: '1B+', label: 'Contributors' },
            { value: '90+', label: 'Fortune 100 companies' },
            { value: '4M+', label: 'Organizations' },
          ]}
        />
      </Row>

      <h2 style={{ fontSize: 16, fontWeight: 600, margin: '24px 0 16px' }}>Sign In Card</h2>
      <Row>
        <SignInCard />
      </Row>

      <h2 style={{ fontSize: 16, fontWeight: 600, margin: '24px 0 16px' }}>E-commerce Card</h2>
      <Row>
        <EcommerceCard
          imageUrl="https://picsum.photos/seed/applewatch/275/174"
          title="Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport"
          price="$599"
        />
      </Row>

      <h2 style={{ fontSize: 16, fontWeight: 600, margin: '24px 0 16px' }}>Customer List Card</h2>
      <Row>
        <CustomerListCard customers={[
          { avatarUrl: 'https://ui-avatars.com/api/?name=Neil+Sims&size=32&background=e0e7ff&color=42389d&bold=true', name: 'Neil Sims', email: 'email@example.com', amount: '$367' },
          { avatarUrl: 'https://ui-avatars.com/api/?name=Bonnie+Green&size=32&background=d1fae5&color=065f46&bold=true', name: 'Bonnie Green', email: 'email@example.com', amount: '$67' },
          { avatarUrl: 'https://ui-avatars.com/api/?name=Micheal+Gough&size=32&background=fef3c7&color=92400e&bold=true', name: 'Micheal Gough', email: 'email@example.com', amount: '$3467' },
          { avatarUrl: 'https://ui-avatars.com/api/?name=Thomas+Lean&size=32&background=fee2e2&color=991b1b&bold=true', name: 'Thomas Lean', email: 'email@example.com', amount: '$2367' },
        ]} />
      </Row>

      <h2 style={{ fontSize: 16, fontWeight: 600, margin: '24px 0 16px' }}>CTA Card</h2>
      <Row>
        <CTACard />
      </Row>

      <h2 style={{ fontSize: 16, fontWeight: 600, margin: '24px 0 16px' }}>Nav Tabs Card</h2>
      <Row>
        <NavTabsCard />
      </Row>

      <h2 style={{ fontSize: 16, fontWeight: 600, margin: '24px 0 16px' }}>Testimonial Card</h2>
      <Row>
        <TestimonialCard testimonials={[
          { avatarUrl: 'https://ui-avatars.com/api/?name=Neil+Sims&size=32&background=e0e7ff&color=42389d&bold=true', name: 'Neil Sims', role: 'CEO, Iris Finance', title: 'Solid foundation for any project', quote: 'If you care for your time, I hands down would go with this.' },
          { avatarUrl: 'https://ui-avatars.com/api/?name=Micheal+Gough&size=32&background=fef3c7&color=92400e&bold=true', name: 'Micheal Gough', role: 'CEO, Iris Finance', title: 'Perfect choice for a SaaS application', quote: 'Designing with Figma components that can be easily translated to utility classes is a huge timesaver.' },
          { avatarUrl: 'https://ui-avatars.com/api/?name=Helene+Engels&size=32&background=d1fae5&color=065f46&bold=true', name: 'Helene Engels', role: 'CEO, Iris Finance', title: 'Mindblowing workflow', quote: 'Aesthetically, the well designed components are beautiful and will undoubtedly level up your next application.' },
          { avatarUrl: 'https://ui-avatars.com/api/?name=Karen+Nelson&size=32&background=fee2e2&color=991b1b&bold=true', name: 'Karen Nelson', role: 'CEO, Iris Finance', title: 'Efficient Collaborating', quote: 'You have many examples that can be used to create a fast prototype for your team.' },
        ]} />
      </Row>

      <h2 style={{ fontSize: 16, fontWeight: 600, margin: '24px 0 16px' }}>Crypto Wallet Card</h2>
      <Row>
        <CryptoWalletCard wallets={[
          { iconUrl: 'https://cdn.simpleicons.org/metamask', name: 'MetaMask', popular: true },
          { iconUrl: 'https://cdn.simpleicons.org/coinbase', name: 'Coinbase Wallet' },
          { iconUrl: 'https://cdn.simpleicons.org/opera', name: 'Opera Wallet' },
          { iconUrl: 'https://cdn.simpleicons.org/walletconnect', name: 'WalletConnect' },
          { iconUrl: 'https://placehold.co/18x18/6b7280/fff?text=F', name: 'Fortmatic' },
        ]} />
      </Row>
    </>
  );
}

// ── App shell ─────────────────────────────────────────────────────────────────

const PAGES: Record<string, { title: string; content: React.ReactNode }> = {
  button:     { title: 'Button',       content: <PageButton /> },
  badge:      { title: 'Badge & Tag',  content: <PageBadge /> },
  forms:      { title: 'Forms',        content: <PageForms /> },
  controls:   { title: 'Controls',     content: <PageControls /> },
  feedback:   { title: 'Feedback',     content: <PageFeedback /> },
  navigation: { title: 'Navigation',   content: <PageNavigation /> },
  card:       { title: 'Card',         content: <PageCard /> },
  data:       { title: 'Data Display', content: <PageData /> },
  modal:      { title: 'Modal',        content: <PageModal /> },
  extra:      { title: 'Extra',        content: <PageExtra /> },
  new:        { title: 'New',          content: <PageNew /> },
};

function SidebarBrand() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '0 4px' }}>
      <div style={{ width: 28, height: 28, borderRadius: 8, background: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><circle cx="12" cy="12" r="5" /><circle cx="4" cy="6" r="3" /><circle cx="20" cy="6" r="3" /><circle cx="4" cy="18" r="3" /><circle cx="20" cy="18" r="3" /></svg>
      </div>
      <span style={{ fontWeight: 700, fontSize: 15, letterSpacing: '-0.01em' }}>Iris React</span>
    </div>
  );
}

function App() {
  const getHash = () => location.hash.replace('#', '') || 'button';
  const [active, setActive] = useState(getHash);

  useEffect(() => {
    const onHash = () => setActive(getHash());
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  const navigate = (key: string) => {
    location.hash = key;
    setActive(key);
  };

  const page = PAGES[active] ?? PAGES.button;

  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
      <Sidebar
        items={NAV}
        activeKey={active}
        onItemClick={navigate}
        logo={<SidebarBrand />}
        color="gray"
      />
      <main style={{ flex: 1, overflowY: 'auto', padding: '32px 40px' }}>
        <h1 style={{ fontSize: 22, fontWeight: 700, marginBottom: 24, color: 'var(--color-text-primary)' }}>
          {page.title}
        </h1>
        {page.content}
      </main>
    </div>
  );
}

createRoot(document.getElementById('root')!).render(<App />);
