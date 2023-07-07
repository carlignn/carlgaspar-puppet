---
title: Learning Flutter From CSEReviewer
draft: false
subtitle: (Draft) Documentation for CSEReviewer
date: 2023-07-07T16:00:00.000Z
toc: true
tags:
  - draft
  - documentation
  - application
  - project
description: Codes that I learned and used in this project.
---

## Convert date String

```dart
import 'package:intl/intl.dart';

void main() {
  final dateString = "2023-05-16";
  final inputFormat = DateFormat("yyyy-MM-dd");
  final outputFormat = DateFormat("MMMM dd, yyyy");

  final date = inputFormat.parse(dateString);
  final formattedDate = outputFormat.format(date);

  print(formattedDate); // Output: May 16, 2023
}
```
