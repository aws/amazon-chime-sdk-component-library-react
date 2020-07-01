# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- Test script to run /Modal/index.test.tsx and /Button/PrimaryButton/index.test.tsx in playwright across 3 browsers
- Add Play, Pause and Sound disabled SVG icons
- Add initial roster components

### Changed
- Added delay for more consistent animation snapshotting with playwright.
- `npm run test` script changed to only include /components and /utils
Update prebuild script to trigger git actions on git push event

### Removed
- Removed active state button tests.

### Fixed
Fixed prebuild for PR and Push

## [0.1.1] - 2020-06-16